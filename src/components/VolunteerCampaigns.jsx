import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const VolunteerCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    campaignName: '',
    date: '',
  });

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/campaigns")
      .then(res => setCampaigns(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleShowForm = (campaign) => {
    setSelectedCampaign(campaign);
    setFormData(prev => ({
      ...prev,
      campaignName: campaign.title,
      email: '', // you can auto-fill from context if user is logged in
    }));
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/volunteer/request", {
        ...formData,
        campaignId: selectedCampaign._id
      });
      toast.success("Verification email sent to campaign creator!");
      setShow(false);
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">All Campaigns</h3>
      <div className="row">
        {campaigns.map(c => (
          <div className="col-md-4 mb-3" key={c._id}>
            <div className="card shadow">
              <img src={`http://localhost:3000/${c.image}`} className="card-img-top" alt={c.title} />
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text">{c.description}</p>
                <button className="btn btn-primary" onClick={() => handleShowForm(c)}>Be a Part</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Join Campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control required type="text" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control required type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
            </Form.Group>
            <Button className="mt-3" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VolunteerCampaigns;
