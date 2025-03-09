import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define interfaces for our form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const SimpleForm: React.FC = () => {
  // State to store form values with proper typing
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // State to track submission status
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle input changes with proper typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
   const { name, value } = e.target;
   setFormData({
    ...formData,
    [name]: value
   });
  };

  // Handle form submission with proper typing
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // send formData to an API
    console.log('submitting this form data', formData);
    setIsSubmitted(true);
  };

  // Reset form handler
  const handleReset = (): void => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };
 
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you for your submission!</h2>
          <p className="mb-6 text-gray-700">We received your information.</p>
          <button 
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">Contact Form</h2>
          
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default SimpleForm;