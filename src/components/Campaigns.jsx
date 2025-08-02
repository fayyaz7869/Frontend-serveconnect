// import React, { useEffect, useReducer, useState } from "react";
// import axios from "axios";
// import EndPoint from "../api/EndPoint.jsx";
// import { Link, useNavigate } from "react-router-dom";

// const initialState = {
//   campaigns: [],
//   loading: true,
//   error: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return { ...state, campaigns: action.payload, loading: false };
//     case "FETCH_ERROR":
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// const Campaigns = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const res = await axios.get(EndPoint.CAMPAIGN_LIST);
//         if (Array.isArray(res.data)) {
//           dispatch({ type: "FETCH_SUCCESS", payload: res.data });
//         } else {
//           dispatch({
//             type: "FETCH_ERROR",
//             payload: "Invalid data format from server",
//           });
//         }
//       } catch (error) {
//         dispatch({ type: "FETCH_ERROR", payload: error.message });
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const { campaigns, loading, error } = state;

//   if (loading) return <div className="text-center mt-5">Loading...</div>;
//   if (error) return <div className="alert alert-danger mt-5">Error: {error}</div>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">All Campaigns</h2>

//       {campaigns.length === 0 ? (
//         <div className="alert alert-info">No campaigns available.</div>
//       ) : (
//         <div className="row">
//           {campaigns.map((c) => (
//             <div key={c._id} className="col-md-4 mb-4">
//               <div className="card h-100 shadow-sm">
//                 {c.image && (
//                   <img
//                     src={`https://backendapi-gfwk.onrender.com/${c.image}`}
//                     alt={c.title}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{c.title}</h5>
//                   <p className="card-text">{c.description}</p>
//                   <p><strong>Location:</strong> {c.location}</p>
//                   <p><strong>Date:</strong> {new Date(c.date).toLocaleDateString()}</p>
                  
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => navigate(`/help-request/${c._id}`)}
//                   >
//                     Get Help
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ✅ Message box for Create Campaign */}
//       <div className="mt-5">
//         <div className="card text-center border-success">
//           <div className="card-body">
//             <h5 className="card-title">Don't see your campaign?</h5>
//             <p className="card-text">
//               Create your own campaign and make a difference today.
//             </p>
//             <Link to="/create-campaign" className="btn btn-success">
//               Create Campaign
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campaigns;


import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import EndPoint from "../api/EndPoint.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  campaigns: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, campaigns: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const Campaigns = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    date: "",
    campaignId: "",
    campaignName: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get(EndPoint.CAMPAIGN_LIST);
        if (Array.isArray(res.data)) {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        } else {
          dispatch({
            type: "FETCH_ERROR",
            payload: "Invalid data format from server",
          });
        }
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchCampaigns();
  }, []);

  const { campaigns, loading, error } = state;

  const handleVolunteerClick = (campaign) => {
    setFormData({
      ...formData,
      campaignId: campaign._id,
      campaignName: campaign.title,
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://backendapi-gfwk.onrender.com/volunteer/join`, formData);
      toast.success("Volunteer request submitted!");
      setShowForm(false);
      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        date: "",
        campaignId: "",
        campaignName: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Try again.");
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="alert alert-danger mt-5">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Campaigns</h2>

      {campaigns.length === 0 ? (
        <div className="alert alert-info">No campaigns available.</div>
      ) : (
        <div className="row">
          {campaigns.map((c) => (
            <div key={c._id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                {c.image && (
                  <img
                    src={`https://backendapi-gfwk.onrender.com/${c.image}`}
                    alt={c.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.description}</p>
                  <p><strong>Location:</strong> {c.location}</p>
                  <p><strong>Date:</strong> {new Date(c.date).toLocaleDateString()}</p>

                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => navigate(`/help-request/${c._id}`)}
                  >
                    Get Help
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleVolunteerClick(c)}
                  >
                    Be a Volunteer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Message box for Create Campaign */}
      <div className="mt-5">
        <div className="card text-center border-success">
          <div className="card-body">
            <h5 className="card-title">Don't see your campaign?</h5>
            <p className="card-text">
              Create your own campaign and make a difference today.
            </p>
            <Link to="/create-campaign" className="btn btn-success">
              Create Campaign
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Volunteer Form Modal */}
      {showForm && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={handleFormSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Volunteer Registration</h5>
                  <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                  <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                  <input type="text" name="contact" className="form-control mb-2" placeholder="Contact Number" value={formData.contact} onChange={handleInputChange} required />
                  <input type="text" name="address" className="form-control mb-2" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
                  <input type="date" name="date" className="form-control mb-2" value={formData.date} onChange={handleInputChange} required />
                  <input type="text" name="campaignName" className="form-control mb-2" value={formData.campaignName} readOnly />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;

