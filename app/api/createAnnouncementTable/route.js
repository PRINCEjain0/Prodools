// pages/api/createAnnouncementTable.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    // Replace these with your MySQL connection details
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    });

    const query = `
        CREATE TABLE announcement (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nid VARCHAR(255) UNIQUE NOT NULL,
            medium VARCHAR(255) NOT NULL,
            published_on DATE NOT NULL,
            img_path VARCHAR(255) NOT NULL,
            text LONGTEXT NOT NULL,
            details LONGTEXT NOT NULL,
            location VARCHAR(255) NOT NULL,
            lat VARCHAR(255) NOT NULL,
            lon VARCHAR(255) NOT NULL,
            added_by VARCHAR(255) NOT NULL,
            last_validated DATE NULL
        );
    `;

    try {
        await connection.query(query);
        await connection.end();
        res.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating table', error: error.message });
    }
}
