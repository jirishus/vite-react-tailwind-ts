import React from 'react';

interface InputFieldProps {
  type?: string;
  label?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField:React.FC<InputFieldProps> = ({ type = "text", label, id, name, value, onChange }) => {
  return (
    <>   
    {label && <label htmlFor={id} className="block mt-5 mb-1 text-gray-700">{label}</label>}
    <input 
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-sm shadow-sm w-full"
      required
      />
    </>
  );
}

export default InputField;