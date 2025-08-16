import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi } from "../features/auth/authApi";
import Toast from "../components/ToastMessage";
import Loader from "../components/Loader";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      user_id: email,
      password: password,
    };

    const loginUserResponse = await loginUserApi(loginData);
    if (loginUserResponse.status === 200) {
      localStorage.setItem("token", loginUserResponse.data.token);
      setToast({
        message: "Login successful!",
        type: "success",
      });
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } else {
      setToast({
        message: "Login failed. Please check your credentials.",
        type: "error",
      });
    }
    navigate("/dashboard");

    console.log("Login Data:", loginUserResponse);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
      {loading && <Loader />}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default LoginPage;
