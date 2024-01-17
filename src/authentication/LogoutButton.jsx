// components/Auth/LogoutButton.js
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase.config';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
        navigate('/');
    } catch (error) {
      console.error('Logout failed', error.message);
      // Handle logout error (show error message, etc.)
    }
  };

  return (
    <button
    type="button"
    onClick={handleLogout}
    className="text-white hover:underline"
  > Logout
    </button>
  );
};

export default LogoutButton;