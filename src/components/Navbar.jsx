import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux-config/UserSlice.js';

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(signOut());
    sessionStorage.removeItem("current-user");
    navigate("/login");
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark text-white py-1">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <Link to="/" className="navbar-brand fw-bold text-success">ServeConnect</Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/campaigns" className="nav-link">Campaigns</Link>
              </li>

              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Welcome, {user?.name}</span>
                  </li>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="btn btn-outline-light btn-sm ms-md-2 mt-2 mt-md-0">Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/Login" className="btn btn-outline-light btn-sm ms-md-2 mt-2 mt-md-0">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Signup" className="btn btn-outline-light btn-sm ms-md-2 mt-2 mt-md-0">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
