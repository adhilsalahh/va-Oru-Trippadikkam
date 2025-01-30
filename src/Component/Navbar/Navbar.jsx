import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgtttt.png'; // Adjust the path if necessary

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-50 py-4 px-4 lg:px-16  shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img  src={logo} alt="Logo" className="h-12 w-12 bg-white rounded-md " />
        </div>

        {/* Desktop Menu */}
        <div className="hidden text-white font-semibold  lg:flex items-center space-x-8">
          <Link to="/tour" className="hover:text-pink-500">Tour</Link>
          <Link to="/destination" className="hover:text-pink-500">Destination</Link>
          <Link to="/packages" className="hover:text-pink-500">Packages</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <IconButton className='text-black' onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden text-white flex flex-col space-y-4 mt-4">
          <Link to="/tour" className="hover:text-pink-500">Tour</Link>
          <Link to="/destination" className="hover:text-pink-500">Destination</Link>
          <Link to="/packages" className="hover:text-pink-500">Packages</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
