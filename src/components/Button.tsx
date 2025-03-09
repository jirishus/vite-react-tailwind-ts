import React from 'react';

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text = "Default", type }) => {
  return (
    <button      
      type={type}
      className="cursor-pointer mt-3 bg-blue-500 hover:bg-blue-600 text-white p-2"
    >
    {text}
    </button>
  );
}

export default Button;