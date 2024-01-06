import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const LoginPageComponent = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigator = useNavigate();

  const login = async(event) => {
    event.preventDefault(); // Prevents default form submission
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("Login success:", user);
      navigator("/cms-page");
    } catch (error) {
      console.error("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input 
        type="text"
          placeholder="Email..."
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input 
          type="password"
          placeholder="Password..."
          onChange={(event) => setLoginPassword(event.target.value)}
        />

        <button onClick={login} disabled={loading}> {/* Disable button during loading */}
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  )
}
export default LoginPageComponent;
