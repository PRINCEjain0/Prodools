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

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', { // Replace with your API endpoint
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Handle successful upload
    } catch (error) {
      console.error(error);
      // Handle upload error
    }
  };

  const handleChangePerson = (index, event) => {
    const { name, value } = event.target;
    const newPersons = [...persons];
    newPersons[index][name] = value;
    setPersons(newPersons);
  };

  const handleChangeDropdown = (personIndex, dropboxIndex, event) => {
    const { value } = event.target;
    const newPersons = [...persons];
    newPersons[personIndex].dropboxes[dropboxIndex].dropdown = value;
    setPersons(newPersons);
  };

  const handleChangeInput = (personIndex, dropboxIndex, event) => {
    const { value } = event.target;
    const newPersons = [...persons];
    newPersons[personIndex].dropboxes[dropboxIndex].input = value;
    setPersons(newPersons);
  };

  const handleAddDropbox = (personIndex) => {
    const newPersons = [...persons];
    const newDropbox = { id: Date.now(), dropdown: '', input: '' };
    newPersons[personIndex].dropboxes.push(newDropbox);
    setPersons(newPersons);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        <div className="max-w-4xl w-full space-y-8">
          {persons.map((person, personIndex) => (
            <div key={person.id} className="mt-8">
              <h2 className="text-2xl mb-6">Announcement</h2>
              <div>
                <form onSubmit={handleSubmit}>
                  <input type="file" onChange={handleFileChange} />
                  <button className="bg-green-400 text-md w-32 h-12 text-white py-1 ml-80" type="submit">Upload</button>
                </form>
                {previewUrl && (
                  <img src={previewUrl} alt="Preview" />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Text</label>
                <textarea
                  name="text"
                  value={person.text}
                  onChange={(e) => handleChangePerson(personIndex, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  name="address"
                  type="text"
                  value={person.address}
                  onChange={(e) => handleChangePerson(personIndex, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  name="latitude"
                  type="text"
                  value={person.latitude}
                  onChange={(e) => handleChangePerson(personIndex, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  name="longitude"
                  type="text"
                  value={person.longitude}
                  onChange={(e) => handleChangePerson(personIndex, e)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                <button
                  type="button"
                  onClick={() => handleAddDropbox(personIndex)}
                  className="block w-full px-4 py-2 text-center border border-gray-300 bg-white mb-4"
                >
                  Add Dropdown-Input Pair
                </button>
                {person.dropboxes.map((dropbox, dropboxIndex) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      onChange={(e) => handleChangeDropdown(personIndex, dropboxIndex, e)}
                      className="w-full px-4 py-2 border border-gray-300 bg-white"
                    >
                      <option value="">Dropdown</option>
                      {/* Add your dropdown options here */}
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <input
                      type="text"
                      value={dropbox.input}
                      onChange={(e) => handleChangeInput(personIndex, dropboxIndex, e)}
                      placeholder="Input type text"
                      className="w-full px-4 py-2 border border-gray-300 bg-white"
                    />
                  </div>
                ))}
              </div>

              <div className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
                <h2 className="text-2xl mb-6">Person Details</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    name="title"
                    type="text"
                    value={person.title}
                    onChange={(e) => handleChangePerson(personIndex, e)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={person.firstName}
                      onChange={(e) => handleChangePerson(personIndex, e)}
                      className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                    <input
                      name="middleName"
                      type="text"
                      value={person.middleName}
                      onChange={(e) => handleChangePerson(personIndex, e)}
                      className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={person.lastName}
                      onChange={(e) => handleChangePerson(personIndex, e)}
                      className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Person Details</label>
                  <textarea
                    name="details"
                    value={person.details}
                    onChange={(e) => handleChangePerson(personIndex, e)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  ></textarea>
                </div>
              </div>
              
            </div>
          ))}
          <div className="flex justify-center mt-6">
          <button className="bg-[#EAA444] w-screen text-xl h-16 text-white">Save</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default AllPersons;
