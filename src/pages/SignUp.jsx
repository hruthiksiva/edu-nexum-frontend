import React, { useState } from 'react';

const SignUpPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: 'India',
    receiveEmails: true,
    agreeToTerms: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition">
            <span className="mr-2">🍎</span> {/* Replace with Apple icon */}
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition">
            <span className="mr-2">🌐</span> {/* Replace with Google icon */}
            Continue as Naveen (naveen7041103@gmail.com)
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

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
              Password (8 or more characters)
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

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="India">India</option>
              {/* Add more countries as needed */}
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="receiveEmails"
                name="receiveEmails"
                checked={formData.receiveEmails}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="receiveEmails" className="ml-2 text-sm text-gray-700">
                Send me helpful emails to find rewarding work and job leads.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                YES, I understand and agree to the{' '}
                <a href="#" className="text-blue-600 underline">
                  Upwork Terms of Service
                </a>
                , including the{' '}
                <a href="#" className="text-blue-600 underline">
                  User Agreement
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>

        {/* Log In Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-green-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;