// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './redux-config/UserSlice.js';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Campaigns from './components/Campaigns.jsx';
import CreateCampaign from './components/CreateCampaign.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import HelpRequestForm from './components/HelpRequestForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = sessionStorage.getItem('current-user');
    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns userRole="NGOCreator" />} />
        <Route path="/create-campaign" element={<CreateCampaign userRole="NGOCreator" />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/help-request/:id" element={<HelpRequestForm />} />
        <Route path='/help-request' element={<HelpRequestForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;
