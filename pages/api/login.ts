// Importing necessary libraries
import { NextApiRequest, NextApiResponse } from 'next';

// Function to handle the API request
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if the username and password match
    if (username === 'admin' && password === '1234') {
      // If credentials are correct, send a success response
      res.status(200).json({ status: "ok", name: 'admin', message: 'Login successful!' });
    } else {
      // If credentials are incorrect, send an unauthorized response
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else if (req.method === 'GET') {
    // Handle GET request
    res.status(405).json({ message: 'GET method is not allowed for this endpoint' });
  } else {
    // If the method is not POST or GET, return method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
