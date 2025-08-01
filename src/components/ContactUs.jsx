// // src/components/ContactUs.jsx

// import React from "react";
// import './Style/style.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const ContactUs = () => {
//   return (
//     <>

//       <section className="contact-section py-5">
//         <div className="container">
//           <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

//           <div className="row">
//             <div className="col-md-6 mb-4">
//               <div className="card shadow p-4">
//                 <form>
//                   <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input type="text" className="form-control" placeholder="Your Name" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input type="email" className="form-control" placeholder="Your Email" />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Message</label>
//                     <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
//                   </div>
//                   <button type="submit" className="btn btn-dark w-100">Send Message</button>
//                 </form>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="mb-4">
//                 <iframe
//                   title="map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086151632325!2d-122.40641738468116!3d37.78508397975773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7dc80a5f%3A0xa790d1a537c68a6f!2sTwitter%20HQ!5e0!3m2!1sen!2sin!4v1638852032670!5m2!1sen!2sin"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </div>
//               <div className="card shadow p-3">
//                 <h5>Address</h5>
//                 <p className="mb-2">123 NGO Street, Indore, India</p>
//                 <h5>Email</h5>
//                 <p className="mb-2">support@serveconnect.org</p>
//                 <h5>Phone</h5>
//                 <p>+91 00100 10017</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default ContactUs;































// src/components/ContactUs.jsx
import React, { useState } from "react";
import './Style/style.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await axios.post("https://backendapi-gfwk.onrender.com/contact/send", formData);
      toast.success(res.data.message || "Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send message");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
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
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-4">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="card shadow p-3">
                <h5>Address</h5>
                <p className="mb-2">123 NGO Street, Indore, India</p>
                <h5>Email</h5>
                <p className="mb-2">support@serveconnect.org</p>
                <h5>Phone</h5>
                <p>+91 00100 10017</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
