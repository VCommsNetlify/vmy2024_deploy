import React from "react";

const Footer = () => {
    return (
        <section className="footer-section">
            <footer className="follow-us">
                <div className="the-v-footer">
                    <div className="footer-logo">
                        <img src="assets/VCON-Logo White.png" alt="v-logo" />
                    </div>
                    <div className="footer-content">
                        <div className="text-footer">
                            <div className="v-malaysia">
                                <h4>V-Malaysia 2024</h4>
                                <p>All Rights Reserved 2024</p>
                            </div>
                            <div className="stay-connected">
                                <h4 className="translate" data-type="stay-connected">
                                    Stay Connected
                                </h4>
                                <p className="translate" data-type="like-tag-share">
                                    Like.Tag.Share
                                </p>
                            </div>
                            <div className="socials-icons-2">
                                <a href="https://www.facebook.com/thevofficial">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/thev_official">
                                    {" "}
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="https://instagram.com/thev_official">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-footer">
                        <ul>
                            <li>
                                {" "}
                                <a href="#" className="translate" data-key="home">
                                    Home
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#merch-carousel" className="translate" data-key="merch">
                                    Merchandise
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#news-sec" className="translate" data-key="events">
                                    Events News and Updates
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#playlist-sec" className="translate" data-key="gallery">
                                    Playlist
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#socials-sec" className="translate" data-key="stories">
                                    Channels
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#gallery-sec" className="translate" data-key="playlist">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="https://the-v.net/en/" className="translate" data-key="history">
                                    The V
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
