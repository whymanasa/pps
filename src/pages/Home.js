import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/homepage.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ background: `url(${BackgroundImage})` }}>
      <div className="headerContainer">
        <h1>Crooked but with Care</h1>
        <p>Let's Hear 'Em - Your Wish</p>
        <Link to="/services">
          <button>To the salon</button>
        </Link>
      </div>
      <div className="heart">
        <i class="fa-solid fa-heart" style={{ fontSize: "50px" }}></i>
      </div>
    </div>
  );
}

export default Home;
