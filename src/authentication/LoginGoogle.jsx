import { useState, useEffect } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '../services/firebase.config';
import { collection, getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';

const LoginGoogle = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [allowedEmails, setAllowedEmails] = useState([]);

  useEffect(() => {
    const fetchAllowedEmails = async () => {
      try {
        const emailsCollection = collection(db, 'users');
        const querySnapshot = await getDocs(emailsCollection);
        const emails = querySnapshot.docs.map((doc) => doc.data().email);
        setAllowedEmails(emails);
      } catch (error) {
        console.error('Error fetching allowed emails:', error);
      }
    };

    fetchAllowedEmails();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Redirect if user is already logged in
        navigate('/dashboard');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign-in...');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user's email is allowed
      if (allowedEmails.includes(user.email)) {
        // Proceed with the user
        navigate('/dashboard');
      } else {
        // Sign out the user and show an error message
        await signOut(auth);
        setError('Email is not allowed.');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default LoginGoogle;
