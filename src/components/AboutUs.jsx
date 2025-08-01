import React from "react";
import './Style/style.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>

      <section className="about-section py-5 bg-light" style={{height:"100%"}}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">About Us</h2>

          <div className="row justify-content-center">
            {/* Mission */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow text-center p-4">
                <FaBullseye size={50} className="text-primary mb-3" />
                <h5 className="fw-bold">Our Mission</h5>
                <p className="text-muted">
                  To connect NGOs, volunteers, and donors on one platform and promote social impact through organized campaigns.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow text-center p-4">
                <FaEye size={50} className="text-success mb-3" />
                <h5 className="fw-bold">Our Vision</h5>
                <p className="text-muted">
                  A world where serving communities is easy, transparent, and impactful — powered by digital connection.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow text-center p-4">
                <FaHandshake size={50} className="text-warning mb-3" />
                <h5 className="fw-bold">Our Values</h5>
                <p className="text-muted">
                  We believe in transparency, collaboration, compassion, and creating lasting change together.
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </section>
      <section className="cta-box my-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="p-4 rounded shadow bg-white">
          <h4 className="fw-bold mb-3">Want to Connect with Us?</h4>
          <p className="text-muted mb-4">
            Whether you're a donor, volunteer, or NGO — we’d love to hear from you. Let’s build a better tomorrow together.
          </p>
          <a href="/contact" className="btn btn-dark px-4 py-2">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};

export default AboutUs;
