import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <a href="" className="link-styled">
              Store
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Mac
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Ipad
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Iphone
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Watch
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              AirPods
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Tv & Home
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Entertainment
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Accessories
            </a>
          </li>
          <li>
            <a href="" className="link-styled">
              Support
            </a>
          </li>
          <li>
            <img src={Search} alt="" />
          </li>
          <li>
            <img src={store} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
