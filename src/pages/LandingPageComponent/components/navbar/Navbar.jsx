import  { useState, useEffect, useContext } from 'react';
import logo from '../../../../assets/images/logo.png';
import SmallButtonComponent from '../SmallButtonComponent';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../authentication/AuthProvider';
import { fetchNightTemperature } from '../../../CMSComponents/customHooks/nightTemp';
import Nav from './Nav';
const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);



  return (
    <nav className="bg-white w-full mb-4 mt-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="flex items-center sm:pr-10">
            <Link to="/">
              <img className="logo block h-10" src={logo} alt="Logo på NoQ" />
            </Link>
          </div>
              {/* Navigation Links */}
          <Nav/>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
