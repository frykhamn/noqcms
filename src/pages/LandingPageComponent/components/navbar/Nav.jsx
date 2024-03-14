import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavLinks = () => {
  return (
    <>
      <Link to="/">Hem</Link>
      <Link to="/bli-vår-partner">Bli vår partner</Link>
      <Link to="/jobba-med-oss">Jobba med oss</Link>
      {/* <Link to="/#">Om Oss</Link>
            <Link to="/#">Teamet</Link> */}
    </>
  );
};
export default NavLinks;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-10 sm:px-10"> */}
      {/* text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out" */}
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full md:flex">
          <div className="flex space-x-4 whitespace-nowrap">
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
            <NavLinks />
          </div>
        </div>
      )}
    </>
  );
};
// export default Nav;

{
  /* <div className="hidden sm:ml-6 sm:flex sm:space-x-10 sm:px-10">
              <Link
                to="/"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Hem
              </Link>
              <Link
                to="/bli-vår-partner"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Bli vår partner
              </Link>
              <Link
                to="/jobba-med-oss"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Jobba med oss
              </Link>
              <a
                href="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Om Oss
              </a>
              <a
                href="#"
                className="text-acc-blue inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Teamet
              </a>
            </div> */
}
