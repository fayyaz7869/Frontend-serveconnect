import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Style/style.css';
import { useDispatch } from 'react-redux';
import { setUser } from "../redux-config/UserSlice";
import EndPoint from "../api/EndPoint.jsx";

import { auth, provider, signInWithPopup } from "../firebase/firebase-config";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: "",
        role: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (state.email && state.password && state.role) {
                const response = await axios.post(EndPoint.SIGN_IN, state, {
                    withCredentials: true,
                });
                dispatch(setUser(response.data.user));
                toast.success("Login successful");
                navigate("/");
            } else {
                toast.error("Please enter all credentials");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google User:", user);

            dispatch(setUser({
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
                role: "user", // Default role, or fetch from backend
            }));

            toast.success("Google login successful");
            navigate("/");
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            toast.error("Google Sign-In Failed");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="login-wrapper d-flex align-items-center justify-content-center vh-100">
                <div className="login-card d-flex flex-column flex-md-row shadow rounded-4 overflow-hidden">

                    {/* Left Image Panel */}
                    <div className="login-left d-none d-md-flex align-items-center justify-content-center">
                        <div className="text-white text-center">
                            <div className="logo-box mb-4">H</div>
                            <h2>HOPE FOR</h2>
                            <h2 className="fw-bold">HUMANITY</h2>
                            <p className="mt-4 fs-5">Welcome to ServeConnect</p>
                        </div>
                    </div>

                    {/* Right Login Panel */}
                    <div className="login-right p-4 p-md-5 bg-white">
                        <button
                            className="btn btn-outline-secondary mb-3"
                            onClick={() => navigate("/")}
                        >
                            ← Back to Home
                        </button>

                        <h3 className="fw-bold mb-2">Login</h3>
                        <p className="text-muted mb-4">Sign in to continue</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    onChange={(e) => setState({ ...state, email: e.target.value })}
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-4">
                                <label>Password</label>
                                <input
                                    onChange={(e) => setState({ ...state, password: e.target.value })}
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="mb-4">
                                <label>Role</label>
                                <select
                                    onChange={(e) => setState({ ...state, role: e.target.value })}
                                    className="form-select"
                                >
                                    <option value="">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="ngoCreator">NGOCreator</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-success w-100 mb-3">
                                Login
                            </button>
                        </form>

                        {/* 🔥 Google Login */}
                        <button
                            className="btn btn-outline-dark w-100 mb-3"
                            onClick={handleGoogleLogin}
                        >
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google"
                                width="20"
                                className="me-2"
                            />
                            Login with Google
                        </button>

                        <p className="text-center">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="text-primary">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
