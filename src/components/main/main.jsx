import React, { useRef } from "react";
import Lottie from "lottie-react";
import { Button } from "antd";
import LaunchIcon from "@mui/icons-material/Launch";
import "./main.css";
import valuable from "../../assets/protection.json";
import xxx from "../../assets/lotte_animation.json";

const main = () => {
  const ref = useRef();
  return (
    <div className="parent_main">
      <div className="container ">
        <h1>
          <div className="slide">
            <li>We</li>
            <li>Make</li>
            <li>Your</li>
            <li>Business</li>
          </div>
          <span>Different</span>
        </h1>
        <Lottie
          animationData={valuable}
          loop={1}
          onMouseEnter={() => {
            ref.current.goToAndPlay(0);
          }}
          onMouseLeave={() => ref.current.goToAndStop(1000)}
          lottieRef={ref}
          style={{
            width: "20vw",
            height: "20vw",
            scale: "1",
          }}
        ></Lottie>
        <div>
          <Button
            type="primary"
            size="large"
            // shape="round"
            href="/contact"
            icon={
              <LaunchIcon style={{ fontSize: "1.5vw", color: "inherit" }} />
            }
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="container2">
        <div className="static-txt">Simplicity is the key to</div>
        <ul className="dynamic-txts">
          <li>
            <span>Success</span>
          </li>
          <li>
            <span>Clarity</span>
          </li>
          <li>
            <span>Efficienty</span>
          </li>
          <li>
            <span>Focus</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default main;
