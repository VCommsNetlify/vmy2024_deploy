import React from "react";

const Playlist = () => {
    return (
        <>
            <div id="playlist-sec" className="anchor"></div>
            <section id="playlist-section" className="row playlist-history">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <img
                                src="assets/Headers/Unstoppable Playlist Header.png"
                                id="play-sec"
                                className="play-title"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 main">
                            <div className="row col-12 video-container">
                                <div className="video-playlist-1">
                                    <iframe
                                        src="https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6353278370112"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <div className="row col-12 playlist-navigation">
                                <button id="prevButton" className="playlist-prev-icon" onclick="scrollPlaylist('prev')">
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='30' height='30' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </button>
                                <div className="playlist-scroll-container">
                                    <div className="playlist-selector">
                                        <button
                                            className="select-video active"
                                            id="selectVideo38"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6353278370112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05202024-v-malaysia-2024-day-2-do-not-let-fear-govern-your-thinking-by-dato-sri-vijay-eswaran680994ed-114e-41ca-862b-18ef31b516fb.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo37"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6353102636112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05202024-vmalaysia2024-highlights-day-4-nothing-can-stop-us2b6f1869-2e4d-4afa-9018-1a9914072165.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo36"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6353205878112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05202024-v-malaysia-2024-day-3-the-journey-of-self-development-by-joseph-sriman-japadas-bismark07f50752-f218-428d-b6f5-aaa3d6d24e6c.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo35"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6353095829112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05172024-v-malaysia-2024-day-3-dont-go-chasing-butterflies-by-joseph-sriman-japadas-bismark8905b7ef-4f0b-419a-b925-5f6215489367.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo34"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6352956416112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05162024-v-malaysia-2024-day-2-the-power-of-influence-by-joseph-sriman-japadas-bismark73624583-7ae3-4786-8982-2bf56ae839f6.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo33"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6352989623112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05162024-v-malaysia-2024-day-1-mothers-are-the-greatest-networkers-by-dato-sri-vijay-eswaran00138c13-bac9-435b-9579-aa6e8806af4f.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo32"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6352967993112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05162024-vmalaysia2024-highlights-day-3-decide-to-be-unstoppablec5ebaf43-fca0-4cb8-896b-be5773e4e255.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo31"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6352953404112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05152024-v-malaysia-2024-day-2-how-to-develop-will-power-by-joseph-sriman-japadas-bismark21106f51-af28-45ce-9544-2c359c405558.png"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            className="select-video"
                                            id="selectVideo30"
                                            onclick="changeVideo(this, 'https://players.brightcove.net/3745659807001/4JJdlFXsg_default/index.html?videoId=6352946954112');"
                                        >
                                            <img
                                                src="assets/3-Events-Gallery/3-News/05152024-v-malaysia-2024-day-1-build-your-dreams-in-reality-by-dato-sri-vijay-eswaran8ad94c6d-5a29-47ca-ba3c-26086495f182.png"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </div>
                                <button id="nextButton" className="playlist-next-icon" onclick="scrollPlaylist('next')">
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='30' height='30' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Playlist;
