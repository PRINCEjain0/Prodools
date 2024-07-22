"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Link from 'next/link';

const AllPersons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      address: '123 Main St, City, Country',
      latitude: '12.345678',
      longitude: '98.765432',
      dropboxes: [{ id: 1, dropdown: 'hii', input: 'heyy' }],
    },
    {
      id: 2,
      address: '456 Another St, City, Country',
      latitude: '23.456789',
      longitude: '87.654321',
      dropboxes: [{ id: 2, dropdown: 'hii', input: 'heyy' }],
    },
    {
      id: 3,
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
        <div className="mt-4">
                <Link href={`/location/create`} className="px-4 py-2 bg-blue-500 text-white ml-48">
                Do you want to add any location? Go ahead and create one!

                </Link>
              </div>
          {persons.map((person, personIndex) => (
            <div key={person.id} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
              <h1 className="text-4xl libre-baskerville-regular mb-2">Location</h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={person.address}
                  readOnly
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Latitude</label>
                  <input
                    type="text"
                    value={person.latitude}
                    readOnly
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Longitude</label>
                  <input
                    type="text"
                    value={person.longitude}
                    readOnly
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 my-2">Dropboxes</label>
                {person.dropboxes.map((dropbox) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                     
                      readOnly
                      disabled 
                      className="w-full px-4 py-2 border border-gray-300 bg-white"
                    >
                      <option value="">Dropdown</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <input
                      type="text"
                      value={dropbox.input}
                      readOnly
                      disabled
                      className="w-full px-4 py-2 border bg-white"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href={`/location/view/{nid}`} className="px-4 py-2 bg-blue-500 text-white ">
                view

                </Link>
              </div>
            </div>
          ))}

          
        </div>
        
      </div>
    </>
  );
};

export default AllPersons;
