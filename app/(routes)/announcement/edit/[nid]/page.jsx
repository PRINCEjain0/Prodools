"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AllPersons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      title: 'This is the Title',
      firstName: 'Prince',
      middleName: '',
      lastName: 'Jain',
      details: "Prince's details go here.",
    },
  ]);

  const [announcement, setAnnouncement] = useState({
    text: 'This is an announcement text.',
  
  });

  const [address, setAddress] = useState('123 Main St, City, Country');
  const [latitude, setLatitude] = useState('12.345678');
  const [longitude, setLongitude] = useState('98.765432');
  const [dropboxes, setDropboxes] = useState([{ id: 1, dropdown: 'hii', input: 'heyy' }]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmitAnnouncement = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }
    const formData = new FormData();

    formData.append('file', selectedFile);
    formData.append('announcement', JSON.stringify(announcement));

    try {
      const response = await fetch('/api/announcement', { 
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert("Image submitted successfully");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Image submission failed");
      
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('announcement', JSON.stringify(announcement));
    formData.append('address', address);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('dropboxes', JSON.stringify(dropboxes));
    formData.append('persons', JSON.stringify(persons));

    try {
      const response = await fetch('/api/announcement', { // Replace with your API endpoint
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert("Form submitted successfully");
      console.log(data); // Handle successful upload
    } catch (error) {
      console.error(error);
      alert("Form submission failed");
      // Handle upload error
    }
  };

  const handleChangePerson = (index, event) => {
    const { name, value } = event.target;
    const newPersons = [...persons];
    newPersons[index][name] = value;
    setPersons(newPersons);
  };

  const handleChangeAnnouncement = (event) => {
    const { name, value } = event.target;
    setAnnouncement({ ...announcement, [name]: value });
  };

  const handleChangeDropdown = (index, event) => {
    const { value } = event.target;
    const newDropboxes = [...dropboxes];
    newDropboxes[index].dropdown = value;
    setDropboxes(newDropboxes);
  };

  const handleChangeInput = (index, event) => {
    const { value } = event.target;
    const newDropboxes = [...dropboxes];
    newDropboxes[index].input = value;
    setDropboxes(newDropboxes);
  };

  const handleAddDropbox = () => {
    const newDropbox = { id: Date.now(), dropdown: '', input: '' };
    setDropboxes([...dropboxes, newDropbox]);
  };

  const addPerson = () => {
    setPersons([...persons, { id: Date.now(), title: '', firstName: '', middleName: '', lastName: '', details: '' }]);
  };

  const removePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        <div className="max-w-4xl w-full space-y-8">
          <div className="p-8 border border-black shadow-lg bg-[#F6EFE6]">
            {announcement.text && (
              <div className="mb-4">
                <h2 className="text-4xl mb-6 libre-baskerville-regular">Announcement</h2>
                <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4">
                  <input {...getInputProps()} />
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" />
                  ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  )}
                </div>
                <button onClick={handleSubmitAnnouncement} className="bg-green-400 mt-2 text-md w-32 h-8 text-white py-1 mb-2">Upload</button>
                <label className="block text-sm font-medium text-gray-700">Text</label>
                <textarea
                  name="text"
                  value={announcement.text}
                  onChange={handleChangeAnnouncement}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Latitude</label>
                  <input
                    name="latitude"
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Longitude</label>
                  <input
                    name="longitude"
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>
              {dropboxes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                  <button
                    type="button"
                    onClick={handleAddDropbox}
                    className="block w-full px-4 py-2 text-center border border-gray-300 mb-4"
                  >
                    Add Dropdown-Input Pair
                  </button>
                  {dropboxes.map((dropbox, dropboxIndex) => (
                    <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                      <select
                        value={dropbox.dropdown}
                        onChange={(e) => handleChangeDropdown(dropboxIndex, e)}
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
                        onChange={(e) => handleChangeInput(dropboxIndex, e)}
                        placeholder="Input type text"
                        className="w-full px-4 py-2 border border-gray-300 bg-white"
                      />
                    </div>
                  ))}
                </div>
              )}

              {persons.map((person, personIndex) => (
                <div key={person.id} className="mt-8">
                  <div className="p-8 border border-amber-900 mt-2 shadow-lg bg-[#F6EFE6]">
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

                    <button
                      onClick={() => removePerson(person.id)}
                      className="bg-red-500 text-white px-4 py-2 mt-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-8">
                <button onClick={addPerson} type="button" className="bg-black text-md w-32 h-16 text-white px-4 py-1">Add Person</button>
              </div>
              <div className="flex justify-center mt-6">
                <button 
                  type="submit" 
                  className="bg-[#EAA444] w-screen text-xl h-16 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPersons;
