import React from 'react';
import './Style/style.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      
<div className="container my-5" style={{backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px', display: 'flex', alignItems: 'center', width: '100%'}}>
      {/* <section className="hero-section d-flex align-items-center justify-content-between px-5 py-4"> */}
        <div className="text-box ">
          <h3 className="fw-bold">WE CAN CHANGE IT TOGETHER LET’S DO IT NOW</h3>
          <p>If God gave you, find people who really need you</p>
        </div>
      {/* </section> */}
</div>
      <section className="container my-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow" style={{height: '350px'}}>
              <img src={image2} className="card-img-top" alt="Education" style={{height: '200px'}}/>
              <div className="card-body">
                <h5 className="card-title">To Educate Poor Children</h5>
                <button className="btn btn-success" onClick={()=> navigate("/help-request")}>Get Help</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow" style={{height: '350px'}}>
              <img src={image3} className="card-img-top" alt="Education" style={{height: '200px'}}/>
              <div className="card-body">
                <h5 className="card-title">Get Medical Help</h5>
                <button className="btn btn-success" onClick={()=> navigate("/help-request")}>Get Help</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <button className="btn btn-lg btn-success rounded-circle explore-btn" onClick={()=> navigate("/campaigns")} >➜<br />EXPLORE<br />MORE<br />HELPS</button>
          </div>
        </div>
      </section>

     <Footer/>
    </>
  );
};

export default Home;
