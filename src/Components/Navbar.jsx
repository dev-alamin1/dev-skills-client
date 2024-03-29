import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";


const Navbar = () => {
  // Receive auth releted info from AuthContext api [from Authproder component]
  const { user, logout } = useContext(AuthContext); // context api

  const loguoutHandler = () => {
    logout()
      .then(() => {
        toast("Logged Out Success !", {
          icon: "🔓",
        });
      })
      .catch();
  };


  const [isActive, setIsActive] = useState("home");
 

  return (
    <div className="">
      <div className="navbar bg-[#2e86de] text-white px-5 md:px-20 ">
        {/* 
                    |------------------------------
                    | Navbar Start (Left Side)
                    |-----------------------------
                    */}
        <div className="navbar-start ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-auto"
            >
              <li
                className={isActive === "home" ? "active-nav" : ""}
                onClick={() => setIsActive("home")}
              >
                <Link to={"/"}>Home</Link>
              </li>
              <li
                className={isActive === "Courses" ? "active-nav" : ""}
                onClick={() => setIsActive("Courses")}
              >
                <Link to={"/courses"}>Courses</Link>
              </li>
              {/* <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/faq'}>FaQ</Link></li> */}
              {user?.uid ? (
                <li>
                  <Link onClick={loguoutHandler}>Logout</Link>
                </li>
              ) : (
                <>
                  <li
                    className={isActive === "Login" ? "active-nav" : ""}
                    onClick={() => setIsActive("Login")}
                  >
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li
                    className={isActive === "Register" ? "active-nav" : ""}
                    onClick={() => setIsActive("Register")}
                  >
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}
              {/* <li><Link><button onClick={()=>setTheme(!theme)}> {theme? <MdDarkMode className='text-xl'/> :<CiLight className='text-xl'/> } </button></Link></li>  */}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="text-3xl font-bold text-white font-[Lobster] tracking-widest"
            >
              Skill Hub
            </Link>
          </div>
        </div>

        {/* 
                |------------------------------
                | Navbar Center 
                |-----------------------------
                */}

        <div className="navbar-center">
          <div className="flex items-center gap-1 md:hidden ml-10">
          <Link
              to="/"
              className="text-3xl font-bold text-white font-[Lobster] tracking-widest"
            >
              Skill Hub
            </Link>
          </div>
        </div>

        {/* 
                |------------------------------
                | Navbar End (Right Side)
                |-----------------------------
                */}

        <div className="navbar-end mr-4">
          <ul className="menu menu-horizontal px-2 hidden md:flex">
            <li
              className={isActive === "home" ? "active-nav" : ""}
              onClick={() => setIsActive("home")}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={isActive === "Courses" ? "active-nav" : ""}
              onClick={() => setIsActive("Courses")}
            >
              <Link to={"/courses"}>Courses</Link>
            </li>
            {/* <li className={isActive === "Blog" ? "active-nav" :""} onClick={()=>setIsActive('Blog')}><Link to={'/blog'}>Blog</Link></li>
                                <li className={isActive === "FaQ" ? "active-nav" :""} onClick={()=>setIsActive('FaQ')} ><Link to={'/faq'}>FaQ</Link></li>  */}

            {user?.uid ? (
              <li>
                <Link onClick={loguoutHandler}>Logout</Link>
              </li>
            ) : (
              <>
                <li
                  className={isActive === "Login" ? "active-nav" : ""}
                  onClick={() => setIsActive("Login")}
                >
                  <Link to={"/login"}>Login</Link>
                </li>
                <li
                  className={isActive === "Register" ? "active-nav" : ""}
                  onClick={() => setIsActive("Register")}
                >
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}

            {/* <li><Link><button onClick={()=>setTheme(!theme)}> {theme? <MdDarkMode className='text-xl'/> :<CiLight className='text-xl'/> } </button></Link></li>  */}
          </ul>
        </div>

        {/* 
                |------------------------------------------
                | Navbar End (Profile And Profile Dropdown)
                |------------------------------------------
                */}

        {user?.uid && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={
                user.displayName ? user.displayName : " Name not Available"
              }
            >
              {user?.photoURL && (
                <div className="w-full rounded-full ">
                  <img src={user.photoURL} alt="" />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-blue-500 text-white rounded-box w-52"
            >
              <li>
                <Link onClick={loguoutHandler}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
