import React from "react";
import "../css/Card.css";
import "../css/Footer.css";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="line" />
        <div className="main_area">
          <p className="number">Questions? Call 000-800-919-1694</p>
          <div className="navigation_container">
            <div className="link_container">
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
            </div>
            <div className="link_container">
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
            </div>
            <div className="link_container">
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
            </div>
            <div className="link_container">
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
              <a href="/">FAQ</a>
            </div>
          </div>
          <div className="box">
            <BsGlobe className="globe_icon" />
            <select
              name="language_select"
              id="language_selector"
              className="dropbox"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <br />
            <br />
            <p>Netflix India</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
