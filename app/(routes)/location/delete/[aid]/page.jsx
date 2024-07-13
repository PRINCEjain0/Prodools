"use client"
import React, { useState } from 'react';

function SmartChip({ label }) {
  const [values, setValues] = useState([]);

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    setValues([...values, newValue]);
    event.target.value = ''; // Clear input field
  };

  return (
    <div>
      <p>{label}</p>
      <div>
        {values.map((value, index) => (
          <span key={index} className="chip">{value}</span>
        ))}
      </div>
      <input type="text" onChange={handleValueChange} placeholder="Add value" />
    </div>
  );
}

export default SmartChip;
