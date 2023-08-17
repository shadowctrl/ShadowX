import React from "react";
import "./navbar.css";
import X from "../../assets/x.json";
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
            <h1
              className="login"
              onClick={() => window.open("/login", "_blank")}
            >
              Login
            </h1>
          </ul>
        </div>

        <div className="title">
          <h1>
            Shadow{" "}
            <Lottie
              animationData={X}
              loop={4}
              style={{
                scale: "3.3",
                width: "2.5vw",
                height: "5vh",
                transform: "rotate(45deg)",
              }}
            >
              {" "}
            </Lottie>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
