import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="p-4 shadow-md">
      <ul className="flex justify-evenly">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;