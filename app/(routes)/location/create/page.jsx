"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const DynamicPersonForm = () => {
  const [persons, setPersons] = useState([{ id: Date.now() }]);

  const addPerson = () => {
    setPersons([...persons, { id: Date.now() }]);
  };

  const removePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center bg-cream-1 py-8">
      <div className="max-w-4xl w-full space-y-8">
        {persons.map((person, index) => (
          <div key={person.id} className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
            <h2 className="text-2xl mb-6">Person details</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" placeholder="Enter title" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" placeholder="Enter first name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input type="text" placeholder="Enter middle name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" placeholder="Enter last name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Person Details</label>
              <textarea placeholder="Enter party details" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"></textarea>
            </div>

            {persons.length > 1 && (
              <button onClick={() => removePerson(person.id)} className="bg-red-500 text-white px-4 py-2">Remove Person</button>
            )}
          </div>
        ))}
      </div>

     
    </div>
     <div className="flex justify-between ">
     <button onClick={addPerson} className="bg-black text-md w-32 h-16 text-white px-4 py-1 ml-80">Add Person</button>
   </div>
   
   <div className='flex justify-center mt-6'>
     <button className="bg-[#EAA444] w-screen text-xl h-16 text-white px-4 mx-80">Submit</button>
   </div>
   </>
  );
};

export default DynamicPersonForm;
