import mysql from 'mysql2/promise';

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
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }

    try {
        const conn = await connect();
        const data = req.body;
        console.log('Received data:', data);

        // ตรวจสอบว่า username นี้มีอยู่แล้วในฐานข้อมูลหรือไม่
        const [users] = await conn.query('SELECT * FROM users WHERE username = ?', [data.username]);
        if (users.length > 0) {
            await conn.end();
            res.status(409).json({ message: 'มีเบอร์โทรนี้อยู่แล้ว' });
            return;
        }

        // ถ้าไม่มี username นี้, ทำการเพิ่มข้อมูลผู้ใช้ใหม่
        const [results] = await conn.query('INSERT INTO users (username, password) VALUES (?, ?)', [data.username, data.password]);
        await conn.end();
        console.log('Database operation successful:', results);
        res.status(200).json({ message:'successful', data: results });
    } catch (error) {
        console.error('Error during database operation:', error);
        res.status(500).json({ message: 'Database connection error', error });
    }
}
