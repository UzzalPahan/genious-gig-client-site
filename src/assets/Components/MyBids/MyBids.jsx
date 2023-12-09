import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const MyBids = () => {
  const [bidsData, setBidsData] = useState([])
  const {authUser} = useContext(AuthContext);
  const url = `https://genious-gig-backend.vercel.app/mybids?email=${authUser?.email}`;
  // const url = https://genious-gig-backend.vercel.app/mybids?email=uzzalpahan10@gmail.com`;

  
  useEffect(()=>{
    axios.get(url,{withCredentials: true})
  .then(res=>{
    console.log('bids data', res.data);
    setBidsData(res.data)
  })
  },[url])
  return (
    <div>
      <div className="py-5">
        <div className="grid px-5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bidsData?.map((category) => (
            <div key={category?._id}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold mb-2">
                      {category?.job_title}
                    </h5>
                    <h5 className="text-sm text-gray-600 mb-2">
                      Email: {category?.email}
                    </h5>
                    <h5 className="text-sm text-gray-600 mb-2">
                      Deadline: {category?.deadline}
                    </h5>
                    <p className="text-gray-700 mb-2">Status: In Progress</p>

                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                    x-show="status === 'In Progress'"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBids;
