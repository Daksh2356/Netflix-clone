import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import "../css/Common.css";
import image from "../images/image.png";
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="netflix_navbar">
          <div className="netflix_brand_logo">
            <img src={image} alt="brand_logo" className="netflix_logo" />
          </div>
          <div className="nav_items">
            <div className="nav_item-1">
              <div className="dropdown_box">
                <BsGlobe className="globe_icon" />
                <select
                  name="language_select"
                  id="language_selector"
                  className="dropbox"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>
            <div className="nav_item-2">
              <button className="sign_in_btn">Sign in </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
