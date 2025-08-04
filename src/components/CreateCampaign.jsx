import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import './Style/style.css';
import EndPoint from '../api/EndPoint';

const CreateCampaign = ({ userRole = 'NGOCreator' }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    address: '',
    email: '',
    image: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userRole !== 'NGOCreator') {
      toast.error("You are not authorized to create a campaign.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      for (let key in form) {
        formData.append(key, form[key]);
      }

      const { data } = await axios.post(EndPoint.CAMPAIGN_CREATE, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });

      toast.success("🎉 Campaign created successfully!");
      setForm({
        title: '',
        description: '',
        location: '',
        address: '',
        email: '',
        date: '',
        image: null
      });
      e.target.reset(); 
    } catch (err) {
      toast.error(err.response?.data?.error || '❌ Failed to create campaign');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="create-campaign-section py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg border-0 rounded-3 p-4">
                <h2 className="text-center mb-4 text-primary">Create New Campaign</h2>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="4" name="description" value={form.description} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={form.address} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={form.location} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="mb-3">
                    <label className="form-label">Campaign Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                    />
                    <small className="form-text text-muted">Only image files are allowed</small>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-success px-5" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Campaign"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default CreateCampaign;
