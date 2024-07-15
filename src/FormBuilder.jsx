import React, { useState } from 'react';

const FormBuilder = () => {
  const [inputs, setInputs] = useState([]);
  const [inputType, setInputType] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [label, setLabel] = useState('');

  const handleAddInput = () => {
    setInputs([...inputs, { type: inputType, placeholder, label }]);
    setInputType('');
    setPlaceholder('');
    setLabel('');
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const generateFormCode = () => {
    return inputs.map((input, index) => {
      if (input.type === 'textarea') {
        return `<label className="block mb-2">${input.label}</label>
<textarea placeholder="${input.placeholder}" className="border p-2 mb-4 w-full"></textarea>`;
      } else {
        return `<label className="block mb-2">${input.label}</label>
<input type="${input.type}" placeholder="${input.placeholder}" className="border p-2 mb-4 w-full" />`;
      }
    }).join('\n');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form Builder</h1>
      <div className="mb-4">
        <label className="block mb-2">Input Type:</label>
        <select 
          value={inputType} 
          onChange={(e) => handleInputChange(e, setInputType)} 
          className="border p-2 mb-4 w-full"
        >
          <option value="">Select Input Type</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Placeholder:</label>
        <input 
          type="text" 
          value={placeholder} 
          onChange={(e) => handleInputChange(e, setPlaceholder)} 
          className="border p-2 mb-4 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Label:</label>
        <input 
          type="text" 
          value={label} 
          onChange={(e) => handleInputChange(e, setLabel)} 
          className="border p-2 mb-4 w-full"
        />
      </div>
      <button 
        onClick={handleAddInput} 
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Input
      </button>

      <h2 className="text-xl font-bold mt-6 mb-4">Generated Form:</h2>
      <form className="space-y-4">
        {inputs.map((input, index) => (
          <div key={index}>
            <label className="block mb-2">{input.label}</label>
            {input.type !== 'textarea' ? (
              <input 
                type={input.type} 
                placeholder={input.placeholder} 
                className="border p-2 mb-4 w-full"
              />
            ) : (
              <textarea 
                placeholder={input.placeholder} 
                className="border p-2 mb-4 w-full"
              />
            )}
          </div>
        ))}
      </form>

      <h2 className="text-xl font-bold mt-6 mb-4">Generated Form Code:</h2>
      <textarea 
        value={generateFormCode()} 
        readOnly 
        className="border p-2 w-full h-64"
      />
    </div>
  );
};

export default FormBuilder;
