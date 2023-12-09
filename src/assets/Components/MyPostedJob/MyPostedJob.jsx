import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const MyPostedJob = () => {
  const [jobsData, setJobsData] = useState([]);
  // const jobsData = useLoaderData();
  // console.log(jobsData, 'jobs data');
  const {authUser} = useContext(AuthContext);
  const url = `https://genious-gig-backend.vercel.app/job?email=${authUser?.email}`;
  // const url = https://genious-gig-backend.vercel.app/mybids?email=uzzalpahan10@gmail.com`;

  console.log('jobs data', jobsData);

  
  useEffect(()=>{
    axios.get(url,{withCredentials: true})
  .then(res=>{
    console.log('bids data', res.data);
    setJobsData(res.data)
  })
  },[url])

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`https://genious-gig-backend.vercel.app/mypostedjob/${id}`, {withCredentials: true})
    .then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="gap-8 grid grid-cols-3">
      {jobsData?.map((jobsDatas) => (
        <div
          key={jobsDatas?._id}
          className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="px-5 pb-5 rounded-lg">
            <h5 className="text-xl font-semibold">{jobsDatas?.job_title}</h5>
            <p className="text-sm text-gray-600">Deadline: 2 weeks</p>
            <p className="text-gray-700">Category: {jobsDatas?.categoryValue}</p>
            {
                        jobsDatas?.description?.length>50 ? <p>Description: { jobsDatas?.description?.slice(0, 50)}</p> : <p>Description: {jobsDatas?.description}</p>
                      }
            <label className="text-sm text-gray-600">Price Range:</label>
            <p className="text-gray-700">Minimum: ${jobsDatas?.min_price} - Maximum: ${jobsDatas?.max_price}</p>

            <div className="flex items-center justify-between mt-5">
              <Link
                to={`/updatepostedjob/${jobsDatas?._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(jobsDatas?._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJob;
