// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux-config/UserSlice.js'; 

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    sessionStorage.removeItem("current-user");
    navigate("/login");
  };

  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="m-0 text-success fw-bold">ServeConnect</h2>
        <nav>
          <Link to="/" className="text-white me-4">Home</Link>
          <Link to="/about" className="text-white me-4">About</Link>
          <Link to="/contact" className="text-white me-4">Contact Us</Link>
          <Link to="/campaigns" className="text-white me-4">Campaigns</Link>

          {isLoggedIn ? (
            <>
              <span className="text-white me-3">Welcome, {user?.name}</span>
              <button onClick={handleLogout} className="btn btn-outline-light btn-sm">Logout</button>
            </>
          ) : (
            <>
              <Link to="/Login" className="btn btn-outline-light btn-sm me-2">Login</Link>
              <Link to="/Signup" className="btn btn-outline-light btn-sm">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
