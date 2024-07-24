import React from "react";
import Logo from "../assets/preety_logo.jpeg";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to='/'> Home </Link>
        <Link to='/services'> Services </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
