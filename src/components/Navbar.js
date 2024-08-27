import React, {useState} from "react";
import Logo from "../assets/pretty_logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [openLinks,setOpenLinks]=useState(false);
  const toggleNavbar=()=>{setOpenLinks(!openLinks)};

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open" : "close"}>
        <img src={Logo} alt="text"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/services"> Services </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
