import React from "react";

function SoundSection() {

    const handleLearnMore = () => {

        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">

                        Neues Soundsystem
                    </h2>
                    <p className="text">
                        Feel the base.
                    </p>
                    <span className="description">
                        Ab 54,12 €/Monat oder 1.299 € vor Inzahlungsnahme
                    </span>
                    <ul className="links">
                        <li>
                            <button className="button">Kaufen</button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>Weitere Infos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;