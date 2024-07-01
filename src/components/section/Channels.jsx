import React from "react";

const Channels = () => {
    return (
        <>
            <div id="socials-sec" className="anchor"></div>
            <section id="socials-section" className="socials">
                <div className="row col-12 socials-text">
                    <img
                        src="assets/Headers/Channels Header.png"
                        id="channel-sec"
                        className="channel-title"
                        alt="Channel Header"
                    />
                    <p className="row col-12 socials-description" data-key="socials-description">
                        How do you aim to be unstoppable? <br />
                        Post your photos and videos with #VMalaysia2024 and share your story in the caption!
                        <br />
                        <br />
                        Who knows? Your story might be featured on our upcoming series!
                    </p>
                </div>
                <div className="row col-12 socials-icons">
                    <a href="https://www.facebook.com/thevofficial">
                        <img src="assets/3-Events-Gallery/4-Channels/FB-logo.png" alt="FB" />
                    </a>
                    <a href="https://twitter.com/thev_official">
                        <img src="assets/3-Events-Gallery/4-Channels/IG-logo.png" alt="IG" />
                    </a>
                    <a href="https://instagram.com/thev_official">
                        <img src="assets/3-Events-Gallery/4-Channels/X-logo.png" alt="X" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default Channels;
