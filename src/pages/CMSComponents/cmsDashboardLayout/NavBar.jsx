// components/NavBar.js
// import { Link } from 'react-router-dom';
import LogoutButton from '../../../authentication/LogoutButton';

const NavBar = () => {
  return (
    <nav className="bg-emerald-600 p-4">
      <ul className="flex space-x-4">
        {/* <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white hover:underline">
            ContentDashboard
          </Link>
        </li> */}
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
