// "use client"
// import Navbar from '@/components/Navbar';
// import React, { useState } from 'react';
// // import Select from 'react-select';

// const DynamicForm = () => {


//   const [inputs, setInputs] = useState([{ dropdown: '', text: '' }]);

//   const addInput = () => {
//     setInputs([...inputs, { dropdown: '', text: '' }]);
//   };

//   const handleDropdownChange = (index, value) => {
//     const newInputs = [...inputs];
//     newInputs[index].dropdown = value;
//     setInputs(newInputs);
//   };

//   const handleTextChange = (index, value) => {
//     const newInputs = [...inputs];
//     newInputs[index].text = value;
//     setInputs(newInputs);
//   };
//   return (
//     <>
//     <Navbar/>
//     <div className="p-6 bg-cream-2 h-screen flex flex-col items-center">
//       <button
//         onClick={addInput}
//         className="mb-4 p-2  shadow-md"
//       >
//         Button to add another dropdown-input pair
//       </button>
//       {inputs.map((input, index) => (
//         <div key={index} className="mb-4 flex items-center space-x-4">
//           <select
//             value={input.dropdown}
//             onChange={(e) => handleDropdownChange(index, e.target.value)}
//             className="w-40  h-12 px-3 py-2 border-b  bg-white  "
//           >
//             <option value="">Dropdown</option>
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </select>
//           <input
//             type="text"
//             value={input.text}
//             onChange={(e) => handleTextChange(index, e.target.value)}
//             className="w-80  h-12 px-3 py-2 border-b  focus:outline-none focus:ring focus:ring-blue-200 text-gray-700"
//             placeholder="Input type text"
//           />
//         </div>
//       ))}
//     </div>

   
//     </>
//   );
// };

// export default DynamicForm;
"use client"
import React, { useState } from 'react';

const DynamicPersonForm = () => {
  const [persons, setPersons] = useState([{ id: Date.now() }]);

  const addPerson = () => {
    setPersons([...persons, { id: Date.now() }]);
  };

  const removePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  return (
    <>
    <div className=" flex  justify-center bg-gray-100 bg-cream-1">
      <div className="bg-[#F6EFE6] p-8 border border-black shadow-lg max-w-4xl w-full ">
        <h2 className="text-2xl font-bold mb-6">Person details</h2>

        {persons.map((person, index) => (
          <div key={person.id} className="mb-8">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" placeholder="Enter title" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" placeholder="Enter first name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input type="text" placeholder="Enter middle name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" placeholder="Enter last name" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Person Details</label>
              <textarea placeholder="Enter party details" className="w-full px-4 py-2 mt-1 border-b border-gray-300 focus:border-gray-400 focus:ring-0 outline-none"></textarea>
            </div>

            {persons.length > 1 && (
              <button onClick={() => removePerson(person.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Remove Person</button>
            )}
          </div>
        ))}

        
      </div>
     
    </div>
     <div className="flex justify-between mt-6">
     <button onClick={addPerson} className="bg-black text-md w-32 h-16 text-white px-4 py-1 ml-80 ">Add Person</button>
     
   </div>
   <div className='flex justify-center mt-6'>
   <button className="bg-[#EAA444] w-screen text-xl h-16 text-white px-4 mx-80 ">Submit</button>
   </div>
   </>
  );
};

export default DynamicPersonForm;

