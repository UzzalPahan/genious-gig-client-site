import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Register = () => {
  const { registerUser, handleUpdateProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const userRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const photoURL = form.profilePhoto.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);

    registerUser(email, password)
      .then((res) => {
        navigate(location?.state ? location?.state : "/");

        handleUpdateProfile(name, photoURL).then((res) => {
          console.log("profile update", res);
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={userRegister}>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="username"
              name="username"
              placeholder="username"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="profilePhoto"
              placeholder="photo URL"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label for="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:ring focus:ring-blue-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded py-2 px-3 focus:ring focus:ring-blue-300"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
          <button className="block">
            Already have an account?
            <Link
              to={"/login"}
              className="ml-3 text-center text-blue-500 mt-2 hover:underline"
            >
              Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
