"use client"
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
    <div className="p-6 bg-amber-100 h-screen flex flex-col items-center">
      <button
        onClick={addInput}
        className="mb-4 p-2 bg-amber-300 rounded-md shadow-md"
      >
        Button to add another dropdown-input pair
      </button>
      {inputs.map((input, index) => (
        <div key={index} className="mb-4 flex items-center space-x-4">
          <select
            value={input.dropdown}
            onChange={(e) => handleDropdownChange(index, e.target.value)}
            className="p-2 bg-amber-200 rounded-md shadow-md"
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
            className="p-2 bg-amber-200 rounded-md shadow-md"
            placeholder="Input type text"
          />
        </div>
      ))}
    </div>

   
    </>
  );
};

export default DynamicForm;
