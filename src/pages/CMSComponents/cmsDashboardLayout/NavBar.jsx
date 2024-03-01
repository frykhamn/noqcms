import LogoutButton from '../../../authentication/LogoutButton';

const NavBar = () => {
  return (
    <nav className="bg-emerald-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
