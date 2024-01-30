import { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, db } from '../services/firebase.config';
import { collection, getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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

    // Fetch allowed emails once when component mounts
    fetchAllowedEmails();

    // Set up listener for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Checking user authentication state...');
      if (user) {
        console.log('User is already logged in:', user);
        // Check if the user's email is allowed
        if (allowedEmails.includes(user.email)) {
          navigate('/cmsDashboard');
        } else {
          signOut(auth);
          setError('Email is not allowed.');
        }
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      console.log('Attempting Google sign-in...');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user's email is allowed
      if (allowedEmails.includes(user.email)) {
        // Proceed with the user
        navigate('/cmsDashboard');
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

export default Login;
