// pages/api/createLocationTable.js
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

    const checkTableExistsQuery = `
        SHOW TABLES LIKE 'location';
    `;

    const createTableQuery = `
        CREATE TABLE location (
            id INT AUTO_INCREMENT PRIMARY KEY,
            aid VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            lat VARCHAR(255) NOT NULL,
            lon VARCHAR(255) NOT NULL,
            added_by VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `;

    try {
        const [rows] = await connection.query(checkTableExistsQuery);
        if (rows.length > 0) {
            await connection.end();
            return res.status(200).json({ message: 'Table already exists' });
        }

        await connection.query(createTableQuery);
        await connection.end();
        res.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating table', error: error.message });
    }
}
