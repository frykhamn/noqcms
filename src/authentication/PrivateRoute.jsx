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
  
  useEffect(() => {
    console.log('Current user:', currentUser);
  }, [currentUser]); // Log whenever currentUser changes

  if (currentUser === null) {
    // Waiting for authentication state to be determined
    return null; // You can return a loading spinner or any other UI here
  }
  return currentUser ? <Outlet /> : <Navigate to="/loginCms" />;
};
export default PrivateRoute;
