 

import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = ({ coins }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="BPL Dream 11 Logo" className="navbar-logo" />
      <h1>BPL Dream 11</h1>
      <ul className="nav-links">
      <li>Home</li>
      <li>Fixture</li>
      <li>Teams</li>
      <li>Schedules</li>
    </ul>
      <div className="coins">
       Coins: {coins}
      </div>
    </nav>
  );
};

export default Navbar;

 