import React from "react";
import image from "../images/bg-image.jpg";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="bg_hero_container">
            <img src={image} alt="bg-pic" className="bg_hero_image" />
          </div>
          <div className="bg_overlay"></div>
          <div className="hero_container">
            <h1 className="hero_title">
              Unlimited movies, TV <br /> shows and more.
            </h1>
            <br />
            <br />
            <h2 className="hero_subtitle">Watch anywhere. Cancel anytime.</h2>
            <br />
            <br />
            <p className="desc">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <nobr>
              <input
                type="text"
                className="email_box"
                placeholder="Email address"
                id="input_box"
              />
              <button onSubmit={window.location.reload} className="start_btn">
                Get Started
              </button>
            </nobr>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
