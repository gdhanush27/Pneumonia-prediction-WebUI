import React from 'react';
import './NavBar.css';
const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/ImageUploader'>ImageUploader</a></li>
        <li><a href='/DonationPage'>DonationPage</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
