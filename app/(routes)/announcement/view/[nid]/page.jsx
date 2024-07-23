"use client";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

// import Zoomist styles
import 'zoomist/css';
// import Zoomist
import Zoomist from 'zoomist';

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

  const [viewOnly, setViewOnly] = useState(true); // Set to true for view-only mode
  const zoomistContainerRef = useRef(null);
  const [zoomistInstance, setZoomistInstance] = useState(null);

  useEffect(() => {
    if (zoomistContainerRef.current && !zoomistInstance) {
      const newZoomistInstance = new Zoomist(zoomistContainerRef.current, {
        zoomRatio: 0.2,
        animationDuration: 300,
        minScale: 1,
        maxScale: 3,
        slider: true,
        zoomer: true,
      });
      setZoomistInstance(newZoomistInstance);
      console.log("Zoomist instance created:", newZoomistInstance);
    }

    return () => {
      if (zoomistInstance) {
        zoomistInstance.destroy();
      }
    };
  }, [zoomistInstance]);


  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-cream-1 py-8">
        <div className="max-w-4xl w-full space-y-8">
          <div className="mt-4">
            <Link href={`/announcement/edit/{nid}`} className="w-full px-4 py-2 bg-green-500 text-white ml-52">
              Do you want to edit the announcement? Go ahead and edit one!
            </Link>
          </div>

          {persons.map((person) => (
            <div key={person.id} className="mt-8">
              <h2 className="text-4xl mb-6 libre-baskerville-regular">Announcement</h2>

              <div ref={zoomistContainerRef} className="zoomist-container">
                <div className="zoomist-wrapper">
                  <div className="zoomist-image">
                    <img
                      src={person.poster}
                      alt="Announcement Poster"
                      width={1000}
                      height={300}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Text</label>
                <textarea
                  name="text"
                  value={person.text}
                  readOnly={viewOnly}
                  className={`w-full px-4 font-light py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  name="address"
                  type="text"
                  value={person.address}
                  readOnly={viewOnly}
                  className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Latitude</label>
                  <input
                    name="latitude"
                    type="text"
                    value={person.latitude}
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Longitude</label>
                  <input
                    name="longitude"
                    type="text"
                    value={person.longitude}
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dropboxes</label>
                {person.dropboxes.map((dropbox, dropboxIndex) => (
                  <div key={dropbox.id} className="grid grid-cols-2 gap-4 mb-4">
                    <select
                      value={dropbox.dropdown}
                      onChange={() => { }}
                      className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                      readOnly={viewOnly}
                    >
                      <option value="">Dropdown</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <input
                      type="text"
                      value={dropbox.input}
                      onChange={() => { }}
                      placeholder="Input type text"
                      className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                      readOnly={viewOnly}
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
                    readOnly={viewOnly}
                    className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={person.firstName}
                      readOnly={viewOnly}
                      className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                    <input
                      name="middleName"
                      type="text"
                      value={person.middleName}
                      readOnly={viewOnly}
                      className={`w-full px-4 py-2 font-light mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={person.lastName}
                      readOnly={viewOnly}
                      className={`w-full px-4 py-2 mt-1 font-light border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none ${viewOnly ? 'disabled cursor-not-allowed border-gray-300' : ''}`}
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
    </>
  );
};

export default AllPersons;