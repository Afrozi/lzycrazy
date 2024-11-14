import React, { useState } from 'react';
import { FaLock, FaMicrophone, FaSearch } from 'react-icons/fa';

const LandingPage = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 125 }, (_, i) => 1900 + i);

  // States for modal and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    state: '',
    city: ''
  });
  const [formDatalogin, setFormDatalogin] = useState({
    email: '',
    password: '',
  });

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setFormDatalogin({ ...formDatalogin, [name]: value });
  }
    // Handle login form submit
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log("Login Form Data:", formDatalogin);
    };

  // State options and corresponding cities
  const states = { 
    "Delhi": ["North Delhi", "South Delhi", "Rohini"], 
    "GOA": ["Panaji", "Margao", "Vasco"], 
    "UP": ["Lucknow", "Kanpur", "Agra"] 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the form data and reset city if state changes
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'state' && { city: '' })  // Reset city if state changes
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        
        {/* Left Side: Video Section with Search Bar */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center bg-white">
          {/* Image Above Search Bar */}
          <div className="-mb-20 -mt-6 ">
            <img src="/images/lzycrazy.png" alt="LzyCrazy Logo" width={180} />
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-2/5 flex justify-center">
            <div className="flex items-center bg-white p-2 rounded-full border border-gray-300 shadow-md w-full max-w-md">
              <input
                type="text"
                readOnly
                placeholder="Coming Soon..."
                className="flex-grow px-1 py-1 rounded-l-full focus:outline-none"
              />
              <FaMicrophone className="text-gray-500 mx-2" />
              <FaSearch className="text-gray-500 mr-2" />
            </div>
          </div>

          {/* Video */}
          <div className="w-4/6 mt-8">
            <video
              controls
              className="w-full h-auto rounded-lg shadow-lg"
            >
              <source src="path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side: Login Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
          <div className="w-full md:w-4/6 max-w-md border border-gray-200 p-4 rounded-lg shadow-md">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name='email'
                  value={formDatalogin.email}
                  onChange={handleChangelogin}
                  id="email"
                  className="mt-1 block w-full px-4 py-4 text-lg border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email or phone"
                  required
                />
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name='password'
                    value={formDatalogin.password}
                    onChange={handleChangelogin}
                    className="mt-1 block w-full px-4 py-4 text-lg border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 text-lg px-4 rounded-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 hover:underline">Forgotten password?</a>
            </div>
            <hr className='my-5' />
            <div className="text-center mt-6">
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-2 text-lg rounded-lg"
                onClick={toggleModal}
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup for "Create New Account" */}
      
      
      {/* Modal Popup for "Create New Account" */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-8 rounded-lg relative mx-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={toggleModal}
            >
              &times;
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
              Create New Account
            </h2>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex space-x-2 mt-4">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>

                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>{month}</option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Gender */}
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="male" onChange={handleChange} className="mr-2" />
                  Male
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="female" onChange={handleChange} className="mr-2" />
                  Female
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="other" onChange={handleChange} className="mr-2" />
                  Other
                </label>
              </div>

              {/* State and City */}
              <div className="flex space-x-2">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                >
                  <option value="">State</option>
                  {Object.keys(states).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>

                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none"
                  disabled={!formData.state}
                >
                  <option value="">City</option>
                  {formData.state && states[formData.state].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        {/* Footer */}
        <footer className="flex justify-between items-center bg-gray-100 p-5 text-gray-600 text-lg">
        <div className="flex gap-5 flex-wrap md:text-lg">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Advertising</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">Investor</a>
          <a href="#" className="hover:underline">We are hiring</a>
        </div>
        <div className="flex gap-5 flex-wrap">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
