// pages/create-tables.js
"use client"
import { useState } from 'react';

export default function CreateTablesPage() {
    const [messages, setMessages] = useState({
        announcement: '',
        location: '',
        ninst: '',
        ainst: '',
    });

    const createTable = async (table) => {
        const response = await fetch(`/api/create${table}Table`, {
            method: 'POST',
        });

        const data = await response.json();
        setMessages((prevMessages) => ({
            ...prevMessages,
            [table.toLowerCase()]: data.message,
        }));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Tables</h1>
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => createTable('Announcement')}
                >
                    Create Announcement Table
                </button>
                {messages.announcement && <p className="mt-2">{messages.announcement}</p>}
            </div>
            <div className="mb-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => createTable('Location')}
                >
                    Create Location Table
                </button>
                {messages.location && <p className="mt-2">{messages.location}</p>}
            </div>
            <div className="mb-4">
                <button
                    className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => createTable('Ninst')}
                >
                    Create Ninst Table
                </button>
                {messages.ninst && <p className="mt-2">{messages.ninst}</p>}
            </div>
            <div className="mb-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => createTable('Ainst')}
                >
                    Create Ainst Table
                </button>
                {messages.ainst && <p className="mt-2">{messages.ainst}</p>}
            </div>
        </div>
    );
}