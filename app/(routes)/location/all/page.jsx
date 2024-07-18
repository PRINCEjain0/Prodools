"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

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

  const [newLocations, setNewLocations] = useState([]);

  const addNewLocation = () => {
    setNewLocations([
      ...newLocations,
      { address: '', latitude: '', longitude: '', dropboxes: [{ id: Date.now(), dropdown: '', input: '' }] },
    ]);
  };

  const saveNewLocation = (index) => {
    setPersons([...persons, { ...newLocations[index], id: Date.now() }]);
    setNewLocations(newLocations.filter((_, i) => i !== index));
  };

  const removeNewLocation = (index) => {
    setNewLocations(newLocations.filter((_, i) => i !== index));
  };

  const removeSavedLocation = (index) => {
    setPersons(persons.filter((_, i) => i !== index));
  };

  const addDropBox = (locationIndex) => {
    const newLocs = [...newLocations];
    newLocs[locationIndex].dropboxes.push({ id: Date.now(), dropdown: '', input: '' });
    setNewLocations(newLocs);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        <div className="max-w-4xl w-full space-y-8">
          {persons.map((person, personIndex) => (
            <div key={person.id} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
              <h1 className="text-4xl libre-baskerville-regular">Location</h1>
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
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                {person.dropboxes.map((dropbox) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      readOnly
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
                      className="w-full px-4 py-2 border bg-white"
                    />
                  </div>
                ))}
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => removeSavedLocation(personIndex)}
              >
                Remove
              </button>
            </div>
          ))}

          {newLocations.map((location, index) => (
            <div key={index} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
              <h2 className="text-2xl libre-baskerville-regular">New Location</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={location.address}
                  onChange={(e) => {
                    const newLocs = [...newLocations];
                    newLocs[index].address = e.target.value;
                    setNewLocations(newLocs);
                  }}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Latitude</label>
                  <input
                    type="text"
                    value={location.latitude}
                    onChange={(e) => {
                      const newLocs = [...newLocations];
                      newLocs[index].latitude = e.target.value;
                      setNewLocations(newLocs);
                    }}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Longitude</label>
                  <input
                    type="text"
                    value={location.longitude}
                    onChange={(e) => {
                      const newLocs = [...newLocations];
                      newLocs[index].longitude = e.target.value;
                      setNewLocations(newLocs);
                    }}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                <button
                  className="block w-full px-4 py-2 text-center border border-gray-300 mb-4"
                  onClick={() => addDropBox(index)}
                >
                  Add Dropdown-Input Pair
                </button>
                {location.dropboxes.map((dropbox, dropboxIndex) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      onChange={(e) => {
                        const newLocs = [...newLocations];
                        newLocs[index].dropboxes[dropboxIndex].dropdown = e.target.value;
                        setNewLocations(newLocs);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 bg-white"
                    >
                      <option value="">Dropdown</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <input
                      type="text"
                      value={dropbox.input}
                      onChange={(e) => {
                        const newLocs = [...newLocations];
                        newLocs[index].dropboxes[dropboxIndex].input = e.target.value;
                        setNewLocations(newLocs);
                      }}
                      placeholder="Input type text"
                      className="w-full px-4 py-2 border bg-white"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded"
                  onClick={() => saveNewLocation(index)}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => removeNewLocation(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={addNewLocation}
          >
            Do you want to add any location? Go ahead and create one!
          </button>
        </div>
      </div>
    </>
  );
};

export default AllPersons;
