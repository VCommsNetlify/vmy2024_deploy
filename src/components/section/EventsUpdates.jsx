import React from "react";

const EventsUpdates = () => {
    return (
        <div className="events-socials-container">
            <div className="row col-12 news-title">
                <img
                    src="assets/Headers/Events news and update header.png"
                    id="news-sec"
                    className="events-news-title"
                    alt="News Header"
                />
            </div>

            <section id="news-section" className="news-section">
                <div className="row col-12 news">
                    <div className="col-12 news-main-feature">
                        <a href="https://the-v.net/en/news?id=06262024-v-malaysia-2024-day-3-support-powered-success-by-datin-sri-umayal-eswaran">
                            <img
                                src="assets/3-Events-Gallery/3-News/06262024-v-malaysia-2024-day-3-support-powered-success-by-datin-sri-umayal-eswaran7d97403b-ebd3-4244-85c1-91df4cd17cf7.png"
                                alt="image"
                            />
                        </a>
                        <h4>V-Malaysia 2024 Day 3: Support-Powered Success by Datin Sri Umayal Eswaran</h4>
                        <p>
                            CHECK OUT THE FULL STORY!{" "}
                            <a href="https://the-v.net/en/news?id=06262024-v-malaysia-2024-day-3-support-powered-success-by-datin-sri-umayal-eswaran">
                                READ MORE!
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row featured-news">
                    <div className="col-12">
                        <div className="news-features">
                            <div className="news-feature-1">
                                <a href="https://the-v.net/en/news?id=06252024-v-malaysia-2024-day-3-unwavering-belief-unstoppable-success-by-datin-sri-umayal-eswaran">
                                    <img
                                        src="assets/3-Events-Gallery/3-News/06252024-v-malaysia-2024-day-3-unwavering-belief-unstoppable-success-by-datin-sri-umayal-eswaran9fa7f99a-e3a3-45f4-bc3a-938d1b241b86.png"
                                        alt="image"
                                    />
                                </a>
                                <p>
                                    V-Malaysia 2024 Day 3: Unwavering Belief, Unstoppable Success by Datin Sri Umayal
                                    Eswaran
                                </p>
                            </div>
                            <div className="news-feature-2">
                                <a href="https://the-v.net/en/news?id=06192024-v-malaysia-2024-day-3-master-your-future-by-dato-sri-vijay-eswaran">
                                    <img
                                        src="assets/3-Events-Gallery/3-News/06192024-v-malaysia-2024-day-3-master-your-future-by-dato-sri-vijay-eswaran8e1dc00a-2817-43e6-9687-bde84467e454.png"
                                        alt="image"
                                    />
                                </a>
                                <p>V-Malaysia 2024 Day 3 - Master Your Future by Dato Sri Vijay Eswaran</p>
                            </div>
                            <div className="news-feature-3">
                                <a href="https://the-v.net/en/news?id=06072024-save-the-date-for-a-greater-vmalaysia2024-this-september">
                                    <img
                                        src="assets/3-Events-Gallery/3-News/06072024-save-the-date-for-a-greater-vmalaysia2024-this-september816262d6-86b0-4f8a-8065-3128a8aad75a.png"
                                        alt="image"
                                    />
                                </a>
                                <p>SAVE THE DATE FOR A GREATER #VMALAYSIA2024 THIS SEPTEMBER!</p>
                            </div>
                            <div className="news-feature-4">
                                <a href="https://the-v.net/en/news?id=06062024-v-malaysia-2024-day-3-from-captivity-to-freedom-by-dato-sri-vijay-eswaran">
                                    <img
                                        src="assets/3-Events-Gallery/3-News/06062024-v-malaysia-2024-day-3-from-captivity-to-freedom-by-dato-sri-vijay-eswaran970af239-ffe5-4583-96c3-066f7e188902.png"
                                        alt="image"
                                    />
                                </a>
                                <p>V-Malaysia 2024 Day 3: From Captivity to Freedom by Dato Sri Vijay Eswaran</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row selector">
                    <div className="col-xs-12 col-sm-auto">
                        <div className="btn-group flex text-lg">
                            <button className="btn btn-default mx-1" onclick="prevPage()">
                                ← PREV
                            </button>
                            <button className="btn btn-default mx-1" onclick="goToPage(1)">
                                1
                            </button>
                            <button className="btn btn-default mx-1" onclick="goToPage(2)">
                                2
                            </button>
                            <button className="btn btn-default mx-1" onclick="goToPage(3)">
                                3
                            </button>
                            <button className="btn btn-default mx-1" onclick="nextPage()">
                                NEXT →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsUpdates;
