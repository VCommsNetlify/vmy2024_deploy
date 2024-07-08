"use client";
import React, { useState, useEffect } from "react";
import data from "../../../public/data/events.json";
import classNames from "classnames";

const Event = ({ img, articleLink, title, idx }) => {
    return (
        <div className={`md:w-[45%] w-full`}>
            <a href={articleLink}>
                <img src={img} alt="image" className="w-full" />
            </a>
            <p className="text-white font-semibold mt-2">{title}</p>
        </div>
    );
};

const EventsUpdates = () => {
    let [currentPage, setCurrentPage] = useState(0);
    let [pages, setPages] = useState([]);

    useEffect(() => {
        setPages(Array.from({ length: Math.ceil((data.others.length || 2) / 2) }, (_, i) => i + 1));
    }, []);

    return (
        <div className="events-socials-container">
            <div className="container mx-auto ">
                <img
                    src="assets/Headers/Events news and update header.png"
                    id="news-sec"
                    className="w-full md:w-[60vw]"
                    alt="News Header"
                />
            </div>

            <section id="news-section" className="news-section">
                <div className="row">
                    <div className="container mx-auto w-full">
                        <a target="_blank" href={data.featured.articleLink}>
                            <img src={data.featured.img} alt="image" className="w-full" />
                        </a>
                        <h4 className="text-lg md:text-xl mt-2 text-white font-semibold">{data.featured.title}</h4>
                        <p className="text-sm text-white block w-full text-center">
                            CHECK OUT THE FULL STORY!{" "}
                            <a href={data.featured.articleLink} target="_blank" className="text-white underline">
                                READ MORE!
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row featured-news">
                    <div className="container mx-auto w-full">
                        <div className="flex flex-wrap gap-4  items-start justify-center w-full">
                            {data.others.slice(currentPage * 2, currentPage * 2 + 2).map((event, idx) => (
                                <Event {...event} key={idx} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full my-6 lg:my-12 md:text-lg text-base">
                    <div className="flex">
                        <button
                            className={classNames(
                                "underline text-white",
                                currentPage === 0 && " opacity-60 cursor-not-allowed"
                            )}
                            disabled={currentPage === 0}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>
                        <div className="mx-4">
                            {pages.map((item, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        disabled={currentPage === item - 1}
                                        onClick={() => setCurrentPage(item - 1)}
                                        className={classNames(
                                            "mx-2 text-white",
                                            currentPage === item - 1 && "font-bold"
                                        )}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            className={classNames(
                                "underline text-white",
                                currentPage === pages[pages.length - 1] - 1 && "opacity-60 cursor-not-allowed"
                            )}
                            disabled={currentPage === pages[pages.length - 1] - 1}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/*  */}
            </section>
        </div>
    );
};

export default EventsUpdates;
