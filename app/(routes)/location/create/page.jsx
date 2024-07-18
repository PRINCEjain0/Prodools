"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const AllPersons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      details: '',
      address: '',
      latitude: '',
      longitude: '',
      dropboxes: '',
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === id ? { ...person, [field]: value } : person
      )
    );
  };

  const handleRemove = (id) => {
    setPersons((prevPersons) => prevPersons.filter((person) => person.id !== id));
  };

  const addPerson = () => {
    setPersons([...persons, { id: Date.now() }]);
  };

  const [pairs, setPairs] = useState([{ id: 1, dropdown: '', input: '' }]);

  const addPair = () => {
    const newId = pairs.length ? pairs[pairs.length - 1].id + 1 : 1;
    setPairs([...pairs, { id: newId, dropdown: '', input: '' }]);
  };

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
              value={persons[0].address}
              onChange={(e) => handleInputChange(persons[0].id, 'address', e.target.value)}
              className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
            />
          </div>
          <div  className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              type="text"
              value={persons[0].latitude}
              onChange={(e) => handleInputChange(persons[0].id, 'latitude', e.target.value)}
              className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              type="text"
              value={persons[0].longitude}
              onChange={(e) => handleInputChange(persons[0].id, 'longitude', e.target.value)}
              className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
            />
          </div>
          </div>

          <div className="flex flex-col items-center  py-8">
            <div className="max-w-4xl w-full space-y-8">
              <button
                onClick={addPair}
                className="block w-full px-4 py-2 text-center  border border-gray-300"
              >
                Button to add another dropdown-input pair
              </button>
              {pairs.map((pair, index) => (
                <div key={pair.id} className="grid grid-cols-2 gap-4 mb-4">
                  <select
                    value={pair.dropdown}
                    onChange={(e) => {
                      const newPairs = [...pairs];
                      newPairs[index].dropdown = e.target.value;
                      setPairs(newPairs);
                    }}
                    className="w-full px-4 py-2 border-b border-gray-300 bg-white"
                  >
                    <option value="">Dropdown</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                  </select>
                  <input
                    type="text"
                    value={pair.input}
                    onChange={(e) => {
                      const newPairs = [...pairs];
                      newPairs[index].input = e.target.value;
                      setPairs(newPairs);
                    }}
                    placeholder="Input type text"
                    className="w-full px-4 py-2 border-b border-gray-300 bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {persons.map((person) => (
            <div key={person.id} >
      
          <div className="p-8 border border-amber-900 shadow-lg bg-[#F6EFE6] mt-2">
              <h2 className="text-2xl mb-6">Person details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={person.title}
                  onChange={(e) => handleInputChange(person.id, 'title', e.target.value)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={person.firstName}
                    onChange={(e) => handleInputChange(person.id, 'firstName', e.target.value)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    value={person.middleName}
                    onChange={(e) => handleInputChange(person.id, 'middleName', e.target.value)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={person.lastName}
                    onChange={(e) => handleInputChange(person.id, 'lastName', e.target.value)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Person Details</label>
                <textarea
                  value={person.details}
                  onChange={(e) => handleInputChange(person.id, 'details', e.target.value)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>

              {persons.length > 1 && (
                <button
                  onClick={() => handleRemove(person.id)}
                  className="bg-red-500 text-white px-4 py-2 mt-4"
                >
                  Remove
                </button>
              )}
            </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
          <button onClick={addPerson} className="bg-black text-md w-32 h-12 text-white py-1 ">Add Person</button>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#EAA444] w-screen text-xl h-16 text-white ">Save</button>
        </div>
        </div>
        
      </div>
      </div>
      
     
    </>
  );
};

export default AllPersons;
