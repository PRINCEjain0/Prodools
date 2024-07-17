



"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const AnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState({ image: null, text: 'This is the announcement text.' });
  const [similarAnnouncements, setSimilarAnnouncements] = useState([
    { id: 1, image: null, text: 'This is the first similar announcement text.' },
    { id: 2, image: null, text: 'This is the second similar announcement text.' }
  ]);

  const handleFileChange = (index, event, isMainAnnouncement = false) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isMainAnnouncement) {
          setAnnouncement({ ...announcement, image: reader.result });
        } else {
          const newSimilarAnnouncements = [...similarAnnouncements];
          newSimilarAnnouncements[index].image = reader.result;
          setSimilarAnnouncements(newSimilarAnnouncements);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (index, event, isMainAnnouncement = false) => {
    const newText = event.target.value;
    if (isMainAnnouncement) {
      setAnnouncement({ ...announcement, text: newText });
    } else {
      const newSimilarAnnouncements = [...similarAnnouncements];
      newSimilarAnnouncements[index].text = newText;
      setSimilarAnnouncements(newSimilarAnnouncements);
    }
  };

  const addSimilarAnnouncement = () => {
    setSimilarAnnouncements([...similarAnnouncements, { id: Date.now(), image: null, text: '' }]);
  };

  const removeAnnouncement = (id) => {
    setSimilarAnnouncements(similarAnnouncements.filter(announcement => announcement.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start bg-cream-1 py-8 h-screen">
        <div className="w-full md:w-1/2 p-4 bg-[#F0E4D7] border-r border-gray-300 h-full overflow-y-auto">
          <h2 className="text-2xl mb-6">(Image and Text)</h2>
          <div className="mb-6 p-4 border border-gray-300">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(null, e, true)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
              />
              {announcement.image && (
                <img src={announcement.image} alt="Announcement" className="mt-4 max-h-64" />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Announcement Text</label>
              <textarea
                value={announcement.text}
                onChange={(e) => handleTextChange(null, e, true)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 bg-[#F6EFE6] h-full overflow-y-auto">
          <h2 className="text-2xl mb-6">Similar Announcement</h2>
          {similarAnnouncements.map((similarAnnouncement, index) => (
            <div key={similarAnnouncement.id} className="mb-6 p-4 border border-red-300 bg-[#FDEDDC]">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                />
                {similarAnnouncement.image && (
                  <img src={similarAnnouncement.image} alt="Similar Announcement" className="mt-4 max-h-64" />
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Announcement Text</label>
                <textarea
                  value={similarAnnouncement.text}
                  onChange={(e) => handleTextChange(index, e)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"
                ></textarea>
              </div>
              <button
                onClick={() => removeAnnouncement(similarAnnouncement.id)}
                className="bg-red-500 text-white px-4 py-2 mt-4"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <button onClick={addSimilarAnnouncement} className="bg-black text-md w-36 h-16 text-white px-4 py-1">Add Announcement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementPage;

