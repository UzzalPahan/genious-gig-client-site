"use-client";

import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";

const JobDetail = () => {
  const { authUser } = useContext(AuthContext);

  const {
      job_title,
      categoryValue,
      deadline,
      description,
      max_price,
      min_price,
      email,
    } = useLoaderData();



  const submitBids = e =>{
    e.preventDefault();
    const form = e.target;
    const email = authUser?.email;
    const deadline = form.submitDate.value;
    const biding_price = form.biding_price.value;
    const buyer_email = form.buyer_email.value;
    const pending = "pending";
    // console.log(email, deadline, biding_price);

    const bid = {job_title, email, deadline, biding_price, pending }
    const bidrequest = {job_title, buyer_email, deadline, biding_price }

    console.log('bid', bid);
    console.log('bidrequest', bidrequest);
    


    axios
      .post("https://genious-gig-backend.vercel.app/bidlist",bid)
      .then((res) => {
        console.log(res.data);
        swal("Good job!", "Job added !", "success");
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .post("https://genious-gig-backend.vercel.app/bidrequest",bidrequest)
      .then((res) => {
        console.log(res.data);
        swal("Good job!", "Job added !", "success");
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="left_side col-span-2 border-2 pl-4 w-full bg-white overflow-hidden shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{job_title}</h2>
          <hr />
          <h3 className="text-gray-600 mb-2">
            {categoryValue}
          </h3>
          <p className="text-sm text-gray-600 mb-2">Posted: {deadline}</p>
          <p className="text-gray-700 mb-2">{description}</p>
          <h2 className="text-sm text-gray-600 mb-2">Price Range: ${max_price} - Min ${min_price}</h2>
        </div>

        <div className="right_side">
          <form onSubmit={submitBids} className="flex max-w-md flex-col gap-4">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="username3" value="Biding Price" />
              </div>
              <TextInput
                id="username3"
                placeholder="Biding Price"
                addon="$"
                name="biding_price"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Finishing Duration" />
              </div>
              <TextInput
                id="password"
                type="date"
                name="submitDate"
                defaultValue={deadline}
                placeholder="Finishing Duration"
                required
                shadow
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Your Email" />
              </div>
              <TextInput
                id="repeat-password"
                defaultValue={authUser?.email}
                addon="@"
                readOnly
                placeholder="Email"
                required
                shadow
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Buyer Email" />
              </div>
              <TextInput
                id="repeat-password"
                type="email"
                placeholder="Email"
                name="buyer_email"
                addon="@"
                defaultValue={email}
                readOnly
                shadow
              />
            </div>
            <Button type="submit" className="bg-green-600 text-center" label="2">Apply Now </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
