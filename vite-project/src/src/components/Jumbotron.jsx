import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbatron() {
    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">Neu</h2>
            <img className="logo" src={Iphone} alt="IPhone 14 Pro" />
            <p className="text">
                Big and bigger.
            </p>
            <span className="description">
                Ab 54,12 €/Monat oder 1.299 € vor Inzahlungsnahme
            </span>
            <ul className="links">
                <li>
                    <button className="button">Kaufen</button>
                </li>
                <li>
                    <a onClick={handleLearnMore} className="link">Weitere Infos</a>
                </li>
            </ul>
            <img src={HoldingIphone} alt="IPhone" className="iphone-img" />
        </div>
    );
}

export default Jumbatron;