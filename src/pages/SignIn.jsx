import React, { useState } from 'react';

const SignIn = () => {
  // State to manage form data and role selection
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student', // Default role is student
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Role Selection */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          <div className="mt-2 flex justify-center space-x-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-full ${
                formData.role === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, role: 'student' }))}
            >
              Student
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full ${
                formData.role === 'teacher'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, role: 'teacher' }))}
            >
              Teacher
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Signing in as a {formData.role}.{' '}
            <a href="#" className="text-blue-600 underline">
              Switch role?
            </a>
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition">
            <span className="mr-2">🍎</span> {/* Replace with Apple icon */}
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition">
            <span className="mr-2">🌐</span> {/* Replace with Google icon */}
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                👁️ {/* Replace with eye icon for password visibility toggle */}
              </span>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Sign In as {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;