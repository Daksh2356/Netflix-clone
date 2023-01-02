import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import "../css/Common.css";
import image from "../images/image.png";
import { BsGlobe } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  function switchTheme() {
    console.log("switching theme..");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    let time = new Date().getHours();
    let darkMode = false;
    if (time >= 19 || time < 7) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
      darkMode = true;
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
      darkMode = false;
    }
    // console.log(time);
    // console.log(darkMode);
    // console.log(document.documentElement.getAttribute("data-theme"));
  }, []);

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
