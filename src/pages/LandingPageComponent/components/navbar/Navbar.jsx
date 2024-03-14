import { useState } from 'react';
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { fetchNightTemperature } from '../../../CMSComponents/customHooks/nightTemp';
import { Menu, X } from 'lucide-react';

import NavLinks from './Nav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white w-full mb-4 mt-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img className="block h-10 w-auto" src={logo} alt="Logo på NoQ" />
          </Link>
        </div>
        <div className="hidden md:flex w-full justify-end">
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <NavLinks />
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <div className="flex flex-col space-y-4">
            <NavLinks style={{ textDecoration: 'none', color: '#3B82F6' }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
