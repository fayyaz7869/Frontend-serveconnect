import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import helpImage from "../assets/image 9.png";
import './Style/style.css';
import EndPoint from "../api/EndPoint";

const HelpRequestForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    campaing_name: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(EndPoint.HELP, formData);
      toast.success("You will soon get help!", {
        position: "top-center",
      });
      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        campaing_name: "",
        problem: "",
      });
    } catch (error) {
      toast.error("Failed to submit help request", {
        position: "top-center",
      });
      console.error("Error:", error);
    }
  };

  return <>
  <ToastContainer/>
    <div>
      <div className="header-banner">
        <h2>Help Desk Ticket Request</h2>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <form className="help-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="mobile no"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="address"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Campaign Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="campaing_name"
                  value={formData.campaing_name}
                  onChange={handleChange}
                  placeholder="Campaign name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Problem</label>
                <textarea
                  className="form-control"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Describe your problem"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>
                  Back
                </button>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <img src={helpImage} alt="Help Visual" className="img-fluid help-image" />
          </div>
        </div>
      </div>
    </div>
</>
};

export default HelpRequestForm;
