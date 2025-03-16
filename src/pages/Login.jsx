import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate Google OAuth login (replace with actual implementation)
    const token = "mock-google-token"; // Use Google Auth library in production
    login(token);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 border rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login to Edu Nexum</h1>
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;