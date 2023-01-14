import React from "react";
import "../css/Card.css";
import image1 from "../images/im-1.png";
import image2 from "../images/im-2.jpg";
import image3 from "../images/im-3.png";
import image4 from "../images/im-4.png";
import image5 from "../images/im-1-2.jpg";
import image6 from "../images/im-2-2.jpg";
import image7 from "../images/im-4-2.jpg";

const Card = () => {
  return (
    <>
      <div className="box_image">
        <hr className="line" />
        <div className="card_1">
          <div className="desc_1">
            <h1>Enjoy on your TV.</h1>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>
          <img
            src={
              document.documentElement.getAttribute("data-theme") === "dark"
                ? image1
                : image5
            }
            alt="tv"
          />
        </div>
        <hr className="line" />
        <div className="card_2">
          <img
            src={
              document.documentElement.getAttribute("data-theme") === "dark"
                ? image2
                : image6
            }
            alt="watch_offline"
          />
          <div className="desc_2">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favourites easily and always have something to watch.
            </h3>
          </div>
        </div>
        <hr className="line" />
        <div className="card_3">
          <div className="desc_3">
            <h1>Watch everywhere.</h1>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h3>
          </div>
          <img src={image3} alt="unlimited_movies" />
        </div>
        <hr className="line" />
        <div className="card_4">
          <img
            src={
              document.documentElement.getAttribute("data-theme") === "dark"
                ? image4
                : image7
            }
            alt="children"
          />
          <div className="desc_4">
            <h1>Create profiles for children.</h1>
            <h3>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
