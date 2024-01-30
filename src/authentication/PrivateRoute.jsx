import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../services/firebase.config';

const PrivateRoute = () => {
  console.log('Current user:', auth.currentUser);

  return auth.currentUser ? <Outlet /> : <Navigate to="/loginCms" />;
};

export default PrivateRoute;
