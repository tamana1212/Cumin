// import React from "react";
import { useState } from "react";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginDetails.email || !loginDetails.password) {
      setError("Please fill all the fields");
      return;
    } else if (!emailRegex.test(loginDetails.email)) {
      setError("Please enter a valid email");
    } else if (loginDetails.password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        {/* Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* Email Input */}
          <div>
            <input
            //   type="email"
              //   required
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              //   required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
          >
            Sign in
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <button className="text-blue-400 hover:text-blue-300 focus:outline-none">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
