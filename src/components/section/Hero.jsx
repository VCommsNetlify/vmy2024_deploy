import React from "react";
import { useTranslation } from "react-i18next";
import 'i18n';

const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <section className="col-12 container-fluid featured-section">
            <nav
                className="navbar fixed-top navbar-expand-lg navbar-dark font-weight-normal navbar-gradient"
                style={{ paddingTop: "30px" }}
            >
                <a className="navbar-brand ml-4 mr-0" href="https://the-v.net/en/">
                    <img src="assets/V-Logo.png" height="50" width="50" alt="v-logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link " href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#merch-carousel">
                                Merchandise
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#news-section">
                                Events News and Updates
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#playlist-sec">
                                Unstoppable Playlist
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#socials-sec">
                                Channels
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#gallery-sec">
                                Gallery
                            </a>
                        </li>
                        <li
                            className="nav-item pr-3"
                            data-toggle="collapse"
                            role="button"
                            data-target="#navbarSupportedContent"
                        >
                            <a className="nav-link" href="#warrior-type">
                                Warrior Type
                            </a>
                        </li>
                        <li className="nav-item pr-3" data-toggle="collapse" data-target="#navbarSupportedContent">
                            <a className="nav-link" href="#faqs-sec">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item dropdown pr-5">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Languages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">
                                    English
                                </a>
                                <a className="dropdown-item" href="#">
                                    العربية
                                </a>
                                <a className="dropdown-item" href="#">
                                    Bahasa Indonesia
                                </a>
                                <a className="dropdown-item" href="#">
                                    Français
                                </a>
                                <a className="dropdown-item" href="#">
                                    Русский
                                </a>
                                <a className="dropdown-item" href="#">
                                    සිංහල
                                </a>
                                <a className="dropdown-item" href="#">
                                    தமிழ்
                                </a>
                                <a className="dropdown-item" href="#">
                                    Türkçe
                                </a>
                                <a className="dropdown-item" href="#">
                                    tiếng Việt
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="featured-section-assets">
                <div id="assets-feature-1" className="feature-left-assets">
                    <img className="border-left" src="assets/1-Landing-Page/Border Left.png" alt="border-1" />
                    <img className="mountain-left" src="assets/1-Landing-Page/Mountain-L.png" alt="mountain-1" />
                </div>
                <div id="assets-feature-2" className="feature-right-assets">
                    <img className="mountain-right" src="assets/1-Landing-Page/Mountain-R.png" alt="mountain-2" />
                    <img className="border-right" src="assets/1-Landing-Page/Border Right.png" alt="border-2" />
                </div>
                <div className="bg-asset">
                    <img className="starfall" src="assets/1-Landing-Page/Starfalls.png" alt="starfall" />
                    <img className="reflection" src="assets/1-Landing-Page/Reflection.png" alt="reflection" />
                </div>

                <div id="#feature" className="featured-page">
                    <div className="container justify-content-center d-flex flex-wrap">
                        <div className="row align-items-center feature-content">
                            <div className="col-12 d-flex justify-content-center align-items-center key-visual">
                                <div className="unstoppable-kv">
                                    <img src="assets/VMY-Sept-Logo.gif" title="KV" alt="unstoppable-logo" />
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center feature-content">
                                <div className="row feature-details-countdown">
                                    <div className="col-12 countdown-div">
                                        <div id="countdown" className="countdown d-flex justify-content-around">
                                            <div className="countdown-item">
                                                <span id="days" className="number font-weight-bolder"></span>
                                                <span className="timer" data-key="days">
                                                    DAYS
                                                </span>
                                            </div>
                                            <div className="countdown-item">
                                                <span id="hours" className="number"></span>
                                                <span className="timer" data-key="hours">
                                                    HOURS
                                                </span>
                                            </div>
                                            <div className="countdown-item">
                                                <span id="minutes" className="number"></span>
                                                <span className="timer" data-key="minutes">
                                                    MINUTES
                                                </span>
                                            </div>
                                            <div className="countdown-item">
                                                <span id="seconds" className="number"></span>
                                                <span className="timer" data-key="seconds">
                                                    SECONDS
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 featured-details-div">
                                        <div id="details-featured-section" className="featured-details">
                                            <h1 className="feature-title" data-key="feature-title">
                                                <strong>RISE AGAIN AND BE UNSTOPPABLE</strong>
                                            </h1>
                                            <p className="featured-description" data-key="featured-description">
                                                Our next 25 years have only just begun. Come home this September and
                                                join us for a greater V-MALAYSIA 2024 like you{"'"}ve never seen before.
                                            </p>
                                            <button className="feature-button" data-key="feature-button">
                                                <a href="https://vshoppe.vtube.net/Buy">Get your tickets on VShoppe!</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
