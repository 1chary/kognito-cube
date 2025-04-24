import React from "react";
import "./index.css";
import Header from "../Header";

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-page-container">
      <div className="content-container">
        <h1 className="main-heading">Online Education</h1>
        <p className="home-page-para">
          Spot-on illustration for your website landing page and mobile
          application
        </p>
        <button className="home-page-button-styling">Read More</button>
      </div>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dowjvitxs/image/upload/v1732950715/image_thwtvj.png"
          alt="page-image"
          className="home-page-image"
        />
      </div>
    </div>
    </>
  );
};

export default Home;
