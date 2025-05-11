import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [role, setRole] = useState('user'); // ✅ ADDED missing state

  const closePopup = () => {
    setShowPopup(false);
    setIsLogin(true); // Reset to login view
    setSuccessMessage('');
  };
  const url = isLogin
      ? 'http://localhost:9093/api/users/login'
      : 'http://localhost:9093/api/users/signup';

  const handleAuthAction = () => {
    if (isLogin) {
      setSuccessMessage('Login successful!');
    } else {
      setSuccessMessage('Account created successfully!');
    }

    setTimeout(() => {
      closePopup();
    }, 2000);
  };

  return (
    <>
      {/* Navbar */}
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Back" />
          <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Forward" />
        </div>

        <div className='flex items-center gap-7'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install app</p>
          <p onClick={() => setShowPopup(true)} className='bg-purple-500 text-black w-28 h-7 rounded-full flex items-center justify-center cursor-pointer'>
            Login/SignUp
          </p>
        </div>
      </div>

      {/* Login/SignUp Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
          <div
            className="bg-white rounded-xl p-8 w-full max-w-sm shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl font-bold mb-4 text-center text-purple-700">
              {isLogin ? 'Login' : 'Sign Up'}
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-purple-700">Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-purple-700">Email:</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-700">Password:</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
                />
              </div>

              {/* ✅ Role Selector */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-purple-700">Role:</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
                  >
                    <option value="user">User</option>
                    <option value="artist">Artist</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              )}

              {isLogin && (
                <div className="text-right text-sm text-purple-700 cursor-pointer">
                  Forgot Password?
                </div>
              )}
              <button
                onClick={handleAuthAction}
                className="w-full bg-purple-600 text-white py-2 rounded mt-2 hover:bg-purple-700"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              {/* ✅ Success Message */}
              {successMessage && (
                <div className="text-green-600 text-center text-sm mt-2">
                  {successMessage}
                </div>
              )}

              <div className="text-center text-sm text-gray-600 mt-3">
                {isLogin ? (
                  <>
                    Don’t have an account?{' '}
                    <span onClick={() => setIsLogin(false)} className="text-purple-700 cursor-pointer underline">
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <span onClick={() => setIsLogin(true)} className="text-purple-700 cursor-pointer underline">
                      Login
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Menu */}
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;