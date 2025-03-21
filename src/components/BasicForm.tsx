import { debug } from '../utils/debug'

import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const BasicForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    debug.log('Form Submitted');
    debug.log('Form Values', formData);
  };

  return (
    <form className="w-md m-auto mt-15 p-5 shadow-md" onSubmit={handleSubmit}>
      <p className="pb-2">Contact Form</p>
      <p>
        <label htmlFor='name'>Name*</label>
      </p>
      <InputField 
        type="name" 
        label="Name" 
        id="name" name="name" value={formData.name} onChange={handleChange} />
      
      <p>
        <label htmlFor='email'>Email*</label>
      </p>
      <InputField 
        type="email" 
        label="Email" 
        id="email" name="email" value={formData.email} onChange={handleChange} />

      <div className="flex justify-end mt-2">
        <Button text="Submit" type="submit" />
      </div>      
    </form>    
  );
}

export default BasicForm;

