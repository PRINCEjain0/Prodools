"use client";
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DynamicPersonForm = () => {
  
  const [persons, setPersons] = useState([{ id: Date.now() }]);
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/location/edit/${persons[0].id}`);
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
                  placeholder="Enter title"
                  name="title"
                  value="Title"
                 
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value="Prince"
                    
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Enter middle name"
                    name="middleName"
                    value=""
                    
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value="Jain"
                   
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Person Details</label>
                <textarea
                  placeholder="Enter party details"
                  name="details"
                  value="Prince's details go here."
                 
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        <button onClick={handleEdit} className="bg-green-600 w-screen text-xl h-16 text-white px-4 mx-80">
          Edit
        </button>
      </div>
    </>
  );
};

export default DynamicPersonForm;
