import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col">
      <img className="h-[100vh]" src="https://i.ibb.co/CttLrzm/Pngtree-error-404-page-not-found-6681621.png" alt="" />
      <button className="text-4xl text-red-500 font-semibold underline">
        <Link to={'/'}>Back to Home </Link></button>
    </div>
  );
};

export default ErrorPage;
