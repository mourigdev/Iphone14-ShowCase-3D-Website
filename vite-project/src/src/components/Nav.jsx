import React from "react";
import Logo from "../assets/images/logo.svg"
import SearchLogo from "../assets/images/search.svg"
import StoreLogo from "../assets/images/store.svg"

function Nav() {

    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="Apple" />
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">Mac</a>
                    </li>
                    <li>
                        <a className="link-styled">IPad</a>
                    </li>
                    <li>
                        <a className="link-styled">IPhone</a>
                    </li>
                    <li>
                        <a className="link-styled">Watch</a>
                    </li>
                    <li>
                        <a className="link-styled">AirPods</a>
                    </li>
                    <li>
                        <a className="link-styled">TV & Home</a>
                    </li>
                    <li>
                        <a className="link-styled">Entertainment</a>
                    </li>
                    <li>
                        <a className="link-styled">Accessoires</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                        <img src={SearchLogo} alt="Search" />

                    </li>
                    <li>
                        <img src={StoreLogo} alt="Store" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav