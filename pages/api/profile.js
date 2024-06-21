import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';

async function connect() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'userlogin'
    });
    return connection;
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Only GET requests are allowed' });
        return;
    }

    // ได้รับ token จาก header Authorization
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token

    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }

    try {
        // ตรวจสอบ JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const conn = await connect();
        const [results] = await conn.query('SELECT id, username, email FROM users WHERE id = ?', [decoded.id]);
        await conn.end();

        if (results.length > 0) {
            const user = results[0];
            res.status(200).json({ message: 'User profile', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            res.status(500).json({ message: 'Failed to authenticate token', error });
        }
    }
}
