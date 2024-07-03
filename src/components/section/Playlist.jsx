"use client";

import React, { useState } from "react";
import data from "../../../public/data/playlist.json";
import classNames from "classnames";

const VideoThumbnail = ({ video, thumbnail, vidIdx, idx, setVidIdx }) => (
    <button className={classNames("select-video", idx === vidIdx && "active")} onClick={() => setVidIdx(idx)}>
        <img src={thumbnail} alt="video" />
    </button>
);

const Playlist = () => {
    const [vidIdx, setVidIdx] = useState(0);

    return (
        <>
            <div id="playlist-sec" className="anchor"></div>
            <section id="playlist-section" className="playlist-history">
                <div className="mt-5">
                    <div className="container mx-auto ">
                        <img
                            src="assets/Headers/Unstoppable Playlist Header.png"
                            id="play-sec"
                            className="w-full md:w-[60vw]"
                            alt="Playlist Header"
                        />
                    </div>
                    <div className="mx-auto">
                        <div className=" main">
                            {/* <div className="bg-red-400 w-40 h-40"></div> */}
                            <div className=" video-container">
                                <div className="video-playlist-1 ">
                                    <iframe
                                        className="h-[320px]  md:h-[500px]"
                                        src={data[vidIdx]?.video}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="relative w-3/4 playlist-navigation">
                                <button
                                    id="prevButton"
                                    className="playlist-prev-icon disabled:cursor-not-allowed disabled:opacity-60"
                                    onClick={() => setVidIdx(vidIdx - 1)}
                                    disabled={vidIdx === 0}
                                >
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='30' height='30' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </button>
                                <div className="playlist-scroll-container w-2/3">
                                    <div className="playlist-selector">
                                        {data.map((vid, idx) => (
                                            <VideoThumbnail
                                                {...vid}
                                                key={idx}
                                                idx={idx}
                                                vidIdx={vidIdx}
                                                setVidIdx={setVidIdx}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    id="nextButton"
                                    className="playlist-next-icon disabled:cursor-not-allowed disabled:opacity-60"
                                    onClick={() => setVidIdx(vidIdx + 1)}
                                    disabled={vidIdx >= data.length - 1}
                                >
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
