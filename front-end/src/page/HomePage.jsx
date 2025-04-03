import React from "react";
import "../style/Home.css";
import Img from "../assets/home.png";
const HomePage = () => {
  return (
    <div className="home-container">
      {/* Left side - Image */}
      <div className="home-left">
        <img
          src={Img} // Replace with a real image URL
          alt="Legal Connect"
          className="home-image"
        />
      </div>

      {/* Right side - Text */}
      <div className="home-right">
        <h1>Welcome to Legal Connect</h1>
        <p>
          Connect with professional lawyers from the comfort of your home. Get
          legal advice, consultations, and expert opinions with just a few
          clicks. Legal Connect makes legal assistance easy, secure, and
          accessible.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
