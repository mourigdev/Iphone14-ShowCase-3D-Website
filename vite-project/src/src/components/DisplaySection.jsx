import React from "react";

function DisplaySection({ triggerPreview }) {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <div className="display-section wrapper">
            <h2 className="title">
                Neu
            </h2>
            <p className="text">
                Brilliant.
            </p>
            <span className="description">
                Eine Batterie, die den ganzen Tag alles gibt.
            </span>
            <button onClick={triggerPreview} className="button">
                Try me
            </button>
            <button onClick={handleScrollToTop} className="back-button">TOP</button>
        </div>
    );
}

export default DisplaySection;