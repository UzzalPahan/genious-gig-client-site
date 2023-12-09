import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import logo from "../../../../public/logo.svg"

const Navbar = () => {
  const { authUser, logOut } = useContext(AuthContext);
  

  const menuList = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/addjob"}>Add Job</Link>
      </li>
      <li>
        <Link to={"/mypostedjob"}>My Posted Job</Link>
      </li>
      <li>
        <Link to={"/mybids"}>My Bids</Link>
      </li>
      <li>
        <Link to={"/bidrequest"}>Bids Requests</Link>
      </li>
    </>
  );

  const signOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
            GeniousGig
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>

        <div className="navbar-end">
          {authUser ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={authUser?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">{authUser?.displayName}</a>
                  </li>
                  <li>
                    <a>{authUser?.email}</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <a onClick={signOut} className="btn">
                Logout
              </a>
            </>
          ) : (
            <Link to={"/login"} className="btn">
              Signin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
