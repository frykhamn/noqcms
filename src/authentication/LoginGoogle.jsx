import { useState,useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import { auth, db } from "../services/firebase.config";
import { collection, doc, getDoc } from '@firebase/firestore';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if a user is already logged in
    console.log("Checking user authentication state...");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("User:", user);
      if (user) {
        console.log("User is already logged in:", user);
        navigate("/cmsDashboard");
      }
    });
    // Cleanup the subscription when the component is unmounted
    return () => unsubscribe();
  }, [navigate]);

  const signInWithGoogle = async () => { 
    try {
      console.log("Attempting Google sign-in...");
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user exists in the Firestore collection
      console.log('db:', db);
      const userDocRef = doc(collection(db, 'users'), user.uid);
      console.log('userDocRef:', userDocRef); 
      const docSnapshot = await getDoc(userDocRef);
      console.log('docSnapshot:', docSnapshot);

      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        // Check if the user has the required role
        if (userData && (userData.role === 'admin' || userData.role === 'cms-user')) {
          navigate('/cmsDashboard');
        } else {
          setError('User does not have the required role.');
          await signOut(auth);
        }
      } else {
        setError('User does not exist in the database.');
        await signOut(auth);
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