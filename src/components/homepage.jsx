import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-base-100 ">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">SBlog</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/learn">
              <li>
                <a>Learn</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
