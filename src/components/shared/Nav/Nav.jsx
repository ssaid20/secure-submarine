import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import { useSelector } from "react-redux";


function Nav() {
  const user = useSelector((store) => store.user);

  return (
  
      <div className="nav">
        <Link to="/home">
          {/* <h2 className="nav-title">Secure Submarine</h2> */}
          <nav className="flex background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <img
              src="/assets/images/site-logo.svg"
              width={33}
              height={33}
              alt="EmergingDev"
            />
            <p className="h2-bold font-spaceGrotesk text-purple-700">
              Emerging{" "}
              <span
                className="h2-bold font-spaceGrotesk text-dark-100
         dark:text-light-900 max-sm:hidden"
              >
                Dev
              </span>
            </p>
          </nav>
        </Link>
        <div>
          {/* If no user is logged in, show these links */}
          {user.id === null && (
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

              {/* <LogOutButton className="navLink" /> */}
            </>
          )}
          {/* <Link className="navLink" to="/about">
          About
        </Link> */}
        </div>
      </div>

  );
}

export default Nav;
