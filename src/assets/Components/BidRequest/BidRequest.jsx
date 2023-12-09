import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";
import swal from "sweetalert";

const BidRequest = () => {
  // const bidsRequest = useLoaderData();
  const {authUser} = useContext(AuthContext)
  const [bidRequest, setBidsRequest] = useState([])

  console.log('bids request data', bidRequest);


  
  useEffect(() => {
    axios
      .get("https://genious-gig-backend.vercel.app/bidrequest")
      .then(function (response) {
        // handle success
        console.log(response);
        setBidsRequest(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  const acceptBtn = () =>{
    swal("Good job!", "Accepted", "success");
    
  }

  return (
    <div>
        {bidRequest?.filter((bids) => bids?.buyer_email === authUser?.email).map(bids =>
      <div key={bids?._id} className="grid rounded overflow-hidden shadow-lg">
        
        
        <div className="w-full p-10">
          <h2 className="text-xl font-semibold mb-2">
            Job Title: {bids?.job_title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Email: {bids?.email}
          </p>
          <p className="text-sm text-gray-600 mb-2">Deadline: {bids?.deadline}</p>
          <p className="text-sm text-gray-600 mb-2">Price: {bids?.price}</p>
          <p className="text-gray-700 mb-2">Status: {bids?.pending}</p>
          <div className="flex justify-end">
            <button onClick={acceptBtn} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-2">
              Accept
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
              Reject
            </button>
          </div>
        </div>
        {/* } */}
        </div>
        )}
    </div>
  );
};

export default BidRequest;
