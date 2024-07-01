import React from "react";

const Quiz = () => {
    return (
        <section>
            <div id="warrior-type" className="anchor"></div>
            <section id="warrior-type-section" className="warrior">
                <div className="row warrior-container">
                    <img
                        src="assets/Headers/Warrior Type Header.png"
                        id="warrior-sec"
                        className="warrior-title"
                        alt="Gallery Header"
                    />
                </div>
                <div className="row col-12 warrior-sec">
                    <div className="warrior-type"></div>
                </div>
            </section>
        </section>
    );
};

export default Quiz;
