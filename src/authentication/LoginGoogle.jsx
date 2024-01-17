import { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase.config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
      const provider = await new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/cmsDashboard");
    } catch (error) {
      console.error("Login error:", error.message);
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
      </div>
    </div>
  );
};

export default Login;