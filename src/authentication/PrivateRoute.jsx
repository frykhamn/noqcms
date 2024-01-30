import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../services/firebase.config';

const PrivateRoute = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);
  
  if (currentUser === null) {
    return null;
  }

  return currentUser ? <Outlet /> : <Navigate to="/loginCms" />;
};
export default PrivateRoute;
