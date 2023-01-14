import { useState, useEffect } from "react";
import "../css/Card.css";
import "../css/Footer.css";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
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

    if (time >= 19 || time < 7) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <>
      <footer>
        <hr className="line" />
        <div className="main_area">
          <p className="number">Questions? Call 000-800-919-1694</p>
          <div className="navigation_container">
            <div className="link_container">
              <a href="/">FAQ</a>
              <a href="/">Investor Relations</a>
              <a href="/">Privacy</a>
              <a href="/">Speed Test</a>
            </div>
            <div className="link_container">
              <a href="/">Help Centre</a>
              <a href="/">Jobs</a>
              <a href="/">Cookie preferences</a>
              <a href="/">Legal Notices</a>
            </div>
            <div className="link_container">
              <a href="/">Accuont</a>
              <a href="/">Ways to Watch</a>
              <a href="/">Corporate Information</a>
              <a href="/">Only on Netflix</a>
            </div>
            <div className="link_container">
              <a href="/">Media Center</a>
              <a href="/">Terms of Use</a>
              <a href="/">Contact Us</a>
            </div>
          </div>
          <div className="toggle-btn-container">
            <button className="btn-theme" onClick={switchTheme}>
              Toggle Theme
            </button>
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
            <div>Netflix India</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
