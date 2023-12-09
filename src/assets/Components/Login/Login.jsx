import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const { logIn, googleAuth } = useContext(AuthContext);
  const location = useLocation();
    const navigate = useNavigate();

  const signInHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        console.log(res);
        const user = {email}

        axios.post('https://genious-gig-backend.vercel.app/jwt', user, {withCredentials: true})
        .then(res =>{
          console.log(res.data);
          if (res.data.success) {
            navigate(location?.state ? location?.state : '/')
        }
        })
      })
      .then((err) => {
        console.log(err);
      });
  };
  const googleLogin = () => {
    googleAuth(googleProvider)
    .then(res=>{
      const userEmail = res.user.email;
      axios.post('https://genious-gig-backend.vercel.app/jwt', userEmail, {withCredentials: true})
        .then(res =>{
          console.log(res.data);
        })
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={signInHandle}>
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
            Login
          </button>
          <button className="block">Don't have an account?
          <Link
            to={"/register"}
            className="ml-3 text-center text-blue-500 mt-2 hover:underline"
          >
            Register
          </Link>
          </button>
          <div className="mt-4">
            <button
              onClick={googleLogin}
              type="button"
              className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
