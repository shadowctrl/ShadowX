import React from "react";
import "./navbar.css";
import animation from "../../assets/protection.json";
import LogoAnime from "../../assets/logo.json";
import ValuableAnime from "../../assets/valuable.json";
import Lottie from "lottie-react";

const Navbar = () => {
  return (
    <div className="parent">
      <div className="navbar_main">
        <div className="components">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About Us">About Us</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            {/* <li>
            <a href="Resources">Resources</a>{" "}
          </li> */}
            <li>
              <a href="/Contact Us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="title">
          <h1>ShadowX</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
