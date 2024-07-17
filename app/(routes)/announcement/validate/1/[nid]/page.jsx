"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const AddressPage = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main St, City, Country', latitude: '12.345678', longitude: '98.765432' },
    { id: 2, address: '456 Side St, Town, Country', latitude: '23.456789', longitude: '87.654321' }
  ]);

  const addAddress = () => {
    setAddresses([...addresses, { id: Date.now(), address: '', latitude: '', longitude: '' }]);
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start bg-cream-1 py-8">
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
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
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
                    className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
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
                    className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => removeAddress(address.id)}
                className="bg-red-500 text-white px-4 py-2 mt-4"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <button onClick={addAddress} className="bg-black text-md w-32 h-16 text-white px-4 py-1">Add Address</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
