import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user"); // Clear user session (example)
      navigate("/"); // Redirect to login page
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-cyan-400 text-center">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <button
          onClick={handleLogout}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
