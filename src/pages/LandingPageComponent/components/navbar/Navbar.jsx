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

// To spread the navigation links apart and take up the whole navbar width, you can utilize Tailwind CSS's flexbox utilities. Here's how you can modify your code to achieve that:

// ```jsx
// return (
//   <>
//     <nav className="flex w-full justify-between"> {/* Use justify-between to spread items */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img className="block h-10 w-auto" src={logo} alt="Logo på NoQ" />
//         </Link>
//       </div>
//       <div className="hidden md:flex w-full justify-end"> {/* Align links to the right */}
//         <div className="flex space-x-8"> {/* Add space between items */}
//           <NavLinks />    
//         </div>
//       </div>
//       <div className="md:hidden">
//         <button onClick={toggleNavbar}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>
//     </nav>
//     {isOpen && (
//       <div className="flex basis-full flex-col items-center">
//         <div className="flex flex-col space-y-4"> {/* Add space between items */}
//           <NavLinks style={{ textDecoration: 'none', color: '#3B82F6' }} />
//         </div>
//       </div>
//     )}
//   </>
// );
// ```

// In this modification:
// - The `nav` container now uses `justify-between` to spread its children evenly across the container, pushing the logo to the left and the navigation links to the right.
// - Inside the `nav`, the container for the navigation links (`div.hidden.md:flex`) occupies the entire width of its parent container (`nav`), ensuring that the links spread apart and take up the entire navbar width.
// - `flex` and `space-x-8` classes are used to add space between the navigation links, allowing them to spread apart.
// - `space-y-4` is added to the container wrapping `NavLinks` when the navbar is toggled on (for smaller screens) to provide vertical spacing between the links.