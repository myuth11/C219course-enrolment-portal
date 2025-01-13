import React from "react";
import homepageImage from "../assets/homepage-image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Republic Polytechnic</h1>
        <p>
          Discover innovative diploma programs and prepare for a career in
          technology and innovation at the School of Infocomm.
        </p>
        <img src={homepageImage} alt="Campus View" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
