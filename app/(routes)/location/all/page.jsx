"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Link from 'next/link';

const AllPersons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      title: 'This is the Title',
      firstName: 'Prince',
      middleName: '',
      lastName: 'Jain',
      details: "Prince's details go here.",
      address: '123 Main St, City, Country',
      latitude: '12.345678',
      longitude: '98.765432',
      dropboxes: [{ id: 1, dropdown: 'hii', input: 'heyy' }],
    },
    {
      id: 2,
      title: 'Another Title',
      firstName: 'Krish',
      middleName: '',
      lastName: 'Yadav',
      details: "Krish's details go here.",
      address: '456 Another St, City, Country',
      latitude: '23.456789',
      longitude: '87.654321',
      dropboxes: [{ id: 2, dropdown: 'hii', input: 'heyy' }],
    },
    {
      id: 3,
      title: 'Sample Title',
      firstName: 'Ram',
      middleName: 'Kumar',
      lastName: 'Sharma',
      details: "Ram's details are here.",
      address: '789 Sample Rd, City, Country',
      latitude: '34.567890',
      longitude: '76.543210',
      dropboxes: [{ id: 3, dropdown: 'hii', input: 'heyy' }],
    },
  ]);

  

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        
        <div className="max-w-4xl w-full space-y-8">
        <div className="p-8 border border-black shadow-lg bg-[#F6EFE6]">

          <h1 className='text-4xl'>Location</h1>
        <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={persons[0].address}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
<div  className="grid grid-cols-2 gap-4">
              <div >
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="text"
                  value={persons[0].latitude}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div >
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="text"
                  value={persons[0].longitude}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                <button
                
                  className={`block w-full px-4 py-2 text-center border border-gray-300 bg-white mb-4 `}
                
                >
                  Button to add another dropdown-input pair
                </button>
                {persons[0].dropboxes.map((dropbox, dropboxIndex) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      onChange={(e) => {
                        const newPersons = [...persons];
                        newPersons[personIndex].dropboxes[dropboxIndex].dropdown = e.target.value;
                        setPersons(newPersons);
                      }}
                      className={`w-full px-4 py-2 border border-gray-300 bg-white`}
                      
                    >
                      <option value="">Dropdown</option>
                      {/* Add your dropdown options here */}
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <input
                      type="text"
                      value={dropbox.input}
                      onChange={(e) => {
                        const newPersons = [...persons];
                        newPersons[personIndex].dropboxes[dropboxIndex].input = e.target.value;
                        setPersons(newPersons);
                      }}
                      placeholder="Input type text"
                      className={`w-full px-4 py-2 border  bg-white`}
                      
                    />
                  </div>
                ))}
              </div>
          {persons.map((person) => (
            <div key={persons[0].id} >
                    

              <div className="p-8 border border-amber-900 mt-2 shadow-lg bg-[#F6EFE6]"> 
              <h2 className="text-2xl mb-6">Person details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={person.title}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={person.firstName}
                    readOnly
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    value={person.middleName}
                    readOnly
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={person.lastName}
                    readOnly
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Person Details</label>
                <textarea
                  value={person.details}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>

        

          
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default AllPersons;
