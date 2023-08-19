import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import IphoneHand from "../assets/images/iphone-hand.png";

const Hero = () => {
  const handleClick = () => {
    const element = document.querySelector(".sound-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="" />
      <p className="text">Big and bigger</p>
      <span className="description">
        From $45.50/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleClick}>
            Learn more
          </a>
        </li>
      </ul>
      <img src={IphoneHand} alt="" className="iphone-img" />
    </div>
  );
};

export default Hero;
