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
    dropboxes: 'Dropbox 1, Dropbox 2',
  };

  const [persons, setPersons] = useState([initialPerson]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newPersons = [...persons];
    newPersons[index][name] = value;
    setPersons(newPersons);
  };

  const handleSave = () => {
    console.log("Saved data:", persons);
    alert("Data saved successfully!");
  };

  const removePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  const addPerson = () => {
    setPersons([...persons, { id: Date.now(), title: '', firstName: '', middleName: '', lastName: '', details: '', address: '', latitude: '', longitude: '', dropboxes: '' }]);
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
          {persons.map((person, index) => (
            <div key={person.id} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
              <h2 className="text-2xl mb-6">Person details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={person.title}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={person.firstName}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    value={person.middleName}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={person.lastName}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Person Details</label>
                <textarea
                  name="details"
                  value={person.details}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={person.address}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  value={person.latitude}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  value={person.longitude}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="flex flex-col items-center bg-cream-1 py-8">
      <div className="max-w-4xl w-full space-y-8">
        <button
          onClick={addPair}
          className="block w-full px-4 py-2 text-center bg-gray-200 border-b border-gray-300"
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
              className="w-full px-4 py-2 border-b border-gray-300 bg-gray-200"
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
              className="w-full px-4 py-2 border-b border-gray-300 bg-gray-200"
            />
          </div>
        ))}
      </div>
    </div>
              <button
                onClick={() => removePerson(person.id)}
                className="bg-red-500 text-white px-4 py-2 mt-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={addPerson} className="bg-black text-md w-32 h-16 text-white px-4 py-1 ml-80">Add Person</button>
      </div>

      <div className='flex justify-center mt-6'>
        <button onClick={handleSave} className="bg-[#EAA444] w-screen text-xl h-16 text-white px-4 mx-80">Save</button>
      </div>
    </>
  );
};

export default DynamicPersonForm;
