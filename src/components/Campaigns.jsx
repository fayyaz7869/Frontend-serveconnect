
// // import React, { useEffect, useReducer } from "react";
// // import axios from "axios";
// // import EndPoint from "../api/EndPoint.jsx";

// // const initialState = {
// //   campaigns: [],
// //   loading: true,
// //   error: null,
// // };

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case "FETCH_SUCCESS":
// //       return { ...state, campaigns: action.payload, loading: false };
// //     case "FETCH_ERROR":
// //       return { ...state, error: action.payload, loading: false };
// //     default:
// //       return state;
// //   }
// // };

// // const Campaigns = () => {
// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   useEffect(() => {
// //     const fetchCampaigns = async () => {
// //       try {
// //         const res = await axios.get(EndPoint.CAMPAIGN_LIST);
// //         console.log("API Response:", res.data);

// //         if (Array.isArray(res.data)) {
// //           dispatch({ type: "FETCH_SUCCESS", payload: res.data });
// //         } else {
// //           dispatch({
// //             type: "FETCH_ERROR",
// //             payload: "Invalid data format from server",
// //           });
// //         }
// //       } catch (error) {
// //         dispatch({ type: "FETCH_ERROR", payload: error.message });
// //       }
// //     };

// //     fetchCampaigns();
// //   }, []);

// //   const { campaigns, loading, error } = state;

// //   if (loading) return <div className="text-center mt-5">Loading...</div>;
// //   if (error) return <div className="alert alert-danger mt-5">Error: {error}</div>;

// //   return (
// //     <div className="container mt-4">
// //       <h2 className="mb-4">All Campaigns</h2>

// //       {campaigns.length === 0 ? (
// //         <div className="alert alert-info">No campaigns available.</div>
// //       ) : (
// //         <div className="row">
// //           {campaigns.map((c) => (
// //             <div key={c._id} className="col-md-4 mb-4">
// //               <div className="card h-100 shadow-sm">
// //                 {c.image && (
// //                   <img
// //                     src={c.image}
// //                     className="card-img-top"
// //                     alt={c.title}
// //                     style={{ height: "200px", objectFit: "cover" }}
// //                   />
// //                 )}
// //                 <div className="card-body">
// //                   <h5 className="card-title">{c.title}</h5>
// //                   <p className="card-text">{c.description}</p>
// //                   <p>
// //                     <strong>Location:</strong> {c.location}
// //                   </p>
// //                   <p>
// //                     <strong>Date:</strong>{" "}
// //                     {new Date(c.date).toLocaleDateString()}
// //                   </p>
// //                   <a href={`/campaign/${c._id}`} className="btn btn-primary">
// //                     View Details
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Campaigns;



// import React, { useEffect, useReducer } from "react";
// import axios from "axios";
// import EndPoint from "../api/EndPoint.jsx";
// import { Link } from "react-router-dom";

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

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const res = await axios.get(EndPoint.CAMPAIGN_LIST);
//         console.log("API Response:", res.data);

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
//                     src={`http://localhost:3000/${c.image}`}
//                     alt={c.title}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />

//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{c.title}</h5>
//                   <p className="card-text">{c.description}</p>
//                   <p>
//                     <strong>Location:</strong> {c.location}
//                   </p>
//                   <p>
//                     <strong>Date:</strong>{" "}
//                     {new Date(c.date).toLocaleDateString()}
//                   </p>
//                   <a href={`/campaign/${c._id}`} className="btn btn-primary">
//                     View Details
//                   </a>
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



import React, { useEffect, useReducer } from "react";
import axios from "axios";
import EndPoint from "../api/EndPoint.jsx";
import { Link, useNavigate } from "react-router-dom";

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
                    src={`http://localhost:3000/${c.image}`}
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
                    className="btn btn-outline-primary"
                    onClick={() => navigate(`/help-request/${c._id}`)}
                  >
                    Get Help
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
    </div>
  );
};

export default Campaigns;
