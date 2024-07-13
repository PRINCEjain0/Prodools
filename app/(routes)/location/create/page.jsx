"use client"
import React, { useState } from 'react';
import Select from 'react-select';

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([{ value: '' }]);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleChange = (index, event) => {
    const values = [...formFields];
    values[index].value = event.target.value;
    setFormFields(values);
  };

  const handleAddField = () => {
    const values = [...formFields];
    values.push({ value: '' });
    setFormFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...formFields];
    values.splice(index, 1);
    setFormFields(values);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedChips(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formFields);
    console.log('Selected Chips:', selectedChips);
  };

  const options = [
    { value: 'chip1', label: 'Chip 1' },
    { value: 'chip2', label: 'Chip 2' },
    { value: 'chip3', label: 'Chip 3' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formFields.map((field, index) => (
        <div key={index} className="flex items-center space-x-4">
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleChange(index, event)}
            className="border rounded p-2 flex-1"
          />
          <button
            type="button"
            onClick={() => handleRemoveField(index)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddField}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Field
      </button>
      <div className="mt-4">
        <Select
          isMulti
          value={selectedChips}
          onChange={handleSelectChange}
          options={options}
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Submit
      </button>
      
    </form>
  );
};

export default DynamicForm;
