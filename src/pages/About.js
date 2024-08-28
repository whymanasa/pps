import React from "react";
import plans from "../assets/girl_in_a_coffee_shop.jpeg";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${plans})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Preety Pretty Salon was created as fun joke. But over time it grew
          into a fun community. All our staff are professionals who take care of
          every single detail to see that smile on your face. We will always be
          grateful to our first customer, our first intern and people who take
          pride in our salon.
        </p>
      </div>
    </div>
  );
}

export default About;
