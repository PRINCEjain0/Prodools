"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const DynamicPersonForm = () => {
  const initialPerson = {
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
  };

  const [persons, setPersons] = useState([initialPerson]);
  const [viewOnly, setViewOnly] = useState(true); // Set to true for view-only mode

 

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        <div className="max-w-4xl w-full space-y-8">
        <div className="p-8 border border-black shadow-lg bg-[#F6EFE6]">

        <h1 className='text-4xl libre-baskerville-regular'>Location</h1>

        <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={persons[0].address}
                  readOnly={viewOnly}
                  className={`w-full px-4 font-light py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                />
              </div>
<div  className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  value={persons[0].latitude}
                  readOnly={viewOnly}
                  className={`w-full px-4 font-light py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  value={persons[0].longitude}
                  readOnly={viewOnly}
                  className={`w-full px-4 font-light py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                />
              </div>
</div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                <button
                
                  className={`block w-full font-light px-4 py-2 text-center border border-gray-300 mb-4 ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  disabled={viewOnly}
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
                      className={`w-full px-4 font-light py-2 border ${viewOnly ? 'border-gray-300 cursor-not-allowed' : 'border-gray-300'} bg-gray-200`}
                      disabled={viewOnly}
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
                      className={`w-full px-4 font-light py-2 border ${viewOnly ? 'border-gray-300 cursor-not-allowed' : 'border-gray-300'} bg-gray-200`}
                      readOnly={viewOnly}
                    />
                  </div>
                ))}
              </div>
          {persons.map((person, personIndex) => (
            <div key={persons[0].id} >
             
              <div className="p-8 border border-amber-900  shadow-lg bg-[#F6EFE6]">
              <h2 className="text-2xl mb-6">Person details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={person.title}
                  readOnly={viewOnly}
                  className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={person.firstName}
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    value={person.middleName}
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={person.lastName}
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2  font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Person Details</label>
                <textarea
                  name="details"
                  value={person.details}
                  readOnly={viewOnly}
                  className={`w-full px-4 py-2 mt-1 font-light border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
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

export default DynamicPersonForm;
