import React from "react";
import { useState } from "react";
import axios from "axios";
import EndPoint from "../api/EndPoint";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import './Style/style.css';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase-config.js";

function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      let response = await axios.post(EndPoint.SIGN_UP, state);
      toast.success(response.data.message);
      setState({
        name: "",
        email: "",
        password: "",
        role: ""
      });

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong....");
    }
    setIsLoading(false);
  }

const handleGoogleSignup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const googleUser = {
      name: user.displayName || "Google User",
      email: user.email,
      password: user.uid, 
      role: "user"
    };

    const response = await axios.post(EndPoint.SIGN_UP, googleUser);
    toast.success("✅ Google Sign Up Successful! You can now log in.");
    navigate("/login");

  } catch (error) {
    console.error("Google Sign Up Error:", error);
    toast.error("❌ Google Sign Up Failed. Try again.");
  }
};




  const navigate = useNavigate();
  return <>
    <ToastContainer />
    <div className="signup-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="signup-card d-flex flex-column flex-md-row shadow rounded-4 overflow-hidden">
        {/* Left Side */}
        <div className="signup-left d-none d-md-flex align-items-center justify-content-center">
          <div className="text-white text-center">
            <div className="logo-box mb-4">H</div>
            <h2>HOPE FOR</h2>
            <h2 className="fw-bold">HUMANITY</h2>
            <p className="mt-4 fs-5">Welcome to ServeConnect</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-right p-4 p-md-5 bg-white">

          <button
            className="btn btn-outline-secondary mb-3"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
          <h3 className="fw-bold mb-2">Sign Up</h3>
          <p className="text-muted mb-4">Create an account to get started</p>
          {isLoading ? <div className="spinner-border spinner-position"></div> : ""}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input defaultValue={state.name} onChange={(event) => setState({ ...state, name: event.target.value })} type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input defaultValue={state.email} onChange={(event) => setState({ ...state, email: event.target.value })} type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input defaultValue={state.password} onChange={(event) => setState({ ...state, password: event.target.value })} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="mb-4">
              <label>Role</label>
              <select defaultValue={state.role} onChange={(event) => setState({ ...state, role: event.target.value })} className="form-select">
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="ngoCreator">NGOCreator</option>
              </select>
            </div>

            <button className="btn btn-success w-100 mb-3">Sign Up</button>
          </form>

         <button
  className="btn btn-outline-dark w-100 mb-3"
  onClick={handleGoogleSignup}
>
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="Google"
    width="20"
    className="me-2"
  />
  Sign up with Google
</button>


          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  </>
};

export default Signup;
