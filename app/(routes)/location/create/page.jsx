"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
// import Select from 'react-select';

const DynamicForm = () => {


  const [inputs, setInputs] = useState([{ dropdown: '', text: '' }]);

  const addInput = () => {
    setInputs([...inputs, { dropdown: '', text: '' }]);
  };

  const handleDropdownChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].dropdown = value;
    setInputs(newInputs);
  };

  const handleTextChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].text = value;
    setInputs(newInputs);
  };
  return (
    <>
    <Navbar/>
    <div className="p-6 bg-cream-2 h-screen flex flex-col items-center">
      <button
        onClick={addInput}
        className="mb-4 p-2  shadow-md"
      >
        Button to add another dropdown-input pair
      </button>
      {inputs.map((input, index) => (
        <div key={index} className="mb-4 flex items-center space-x-4">
          <select
            value={input.dropdown}
            onChange={(e) => handleDropdownChange(index, e.target.value)}
            className="p-2 bg-white  shadow-md"
          >
            <option value="">Dropdown</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            type="text"
            value={input.text}
            onChange={(e) => handleTextChange(index, e.target.value)}
            className="w-80  h-12 px-3 py-2 border  shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-gray-700"
            placeholder="Input type text"
          />
        </div>
      ))}
    </div>

   
    </>
  );
};

export default DynamicForm;
