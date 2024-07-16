"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const AllPersons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      poster: 'https://plus.unsplash.com/premium_photo-1663099586860-e81d57e8b6bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5ub3VuY2VtZW50JTIwcG9zdGVyfGVufDB8fDB8fHww',
      text: 'This is an announcement text.',
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
  ]);

  

  

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
       
        <div className="max-w-4xl w-full space-y-8">
          
          {persons.map((person, personIndex) => (
            
            <div key={person.id} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
              <div key={person.id} className="mt-8">
                  <h2 className="text-2xl mb-6">Announcement</h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Poster</label>
                    <img
                      src={person.poster}
                      alt="person Poster"
                      className="w-full h-auto mt-1 border-b border-gray-300"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Text</label>
                    <textarea
                      value={person.text}
                      readOnly
                      className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                    ></textarea>
                  </div>

          
                  </div>
              <h2 className="text-2xl mb-6">Person Details</h2>
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={person.address}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="text"
                  value={person.latitude}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="text"
                  value={person.longitude}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                <button
                  className={`block w-full px-4 py-2 text-center border border-gray-300 bg-gray-200 mb-4`}
                >
                  Button to add another dropdown-input pair
                </button>
                {person.dropboxes.map((dropbox, dropboxIndex) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      onChange={(e) => {
                        const newPersons = [...persons];
                        newPersons[personIndex].dropboxes[dropboxIndex].dropdown = e.target.value;
                        setPersons(newPersons);
                      }}
                      className={`w-full px-4 py-2 border border-gray-300 bg-gray-200`}
                      disabled
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
                      className={`w-full px-4 py-2 border border-gray-300 bg-gray-200`}
                      readOnly
                    />
                  </div>
                ))}
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPersons;
