"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Link from 'next/link';

const AddressPage = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main St, City, Country', latitude: '12.345678', longitude: '98.765432' },
    { id: 2, address: '456 Side St, Town, Country', latitude: '23.456789', longitude: '87.654321' }
  ]);

  return (
    <>
      <Navbar />
      <div className="bg-cream-1 min-h-screen">
      <div className="w-full py-4 px-8 bg-cream-1 text-center">
          <div className="mb-4">
            <Link href={`/announcement/validate/1/{nid}`} className="inline-block px-4 py-2 bg-green-500 text-white">
              Do you want to Validate announcement? Go back and Validate 1!
            </Link>
          </div>
          <div>
            <Link href={`/announcement/validate/3/{nid}`} className="inline-block px-4 py-2 bg-green-500 text-white">
              Do you want to Validate announcement? Go ahead and Validate 3!
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 bg-[#F0E4D7] border-r border-gray-300">
            <h2 className="text-2xl mb-6">(Address)</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Lat</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lon</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 bg-[#F6EFE6]">
            <h2 className="text-2xl mb-6">Similar Address</h2>
            {addresses.map((address, index) => (
              <div key={address.id} className="mb-6 p-4 border border-red-300 bg-[#FDEDDC]">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    value={address.address}
                    onChange={(e) => {
                      const newAddresses = [...addresses];
                      newAddresses[index].address = e.target.value;
                      setAddresses(newAddresses);
                    }}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none cursor-not-allowed"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Lat</label>
                    <input
                      type="text"
                      value={address.latitude}
                      onChange={(e) => {
                        const newAddresses = [...addresses];
                        newAddresses[index].latitude = e.target.value;
                        setAddresses(newAddresses);
                      }}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none cursor-not-allowed"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Lon</label>
                    <input
                      type="text"
                      value={address.longitude}
                      onChange={(e) => {
                        const newAddresses = [...addresses];
                        newAddresses[index].longitude = e.target.value;
                        setAddresses(newAddresses);
                      }}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none cursor-not-allowed"
                      disabled
                    />
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

export default AddressPage;