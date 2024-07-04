"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import quiz from "../../../public/data/quiz.json";
import result from "../../../public/data/result.json";
import Image from "next/image";

const Quiz = () => {
    const imageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(quiz.map(() => ""));
    useEffect(() => {
        setLoading(true);
    }, [index]);

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
                <div className="w-full flex items-center justify-center"></div>
                <div className="mx-auto container pb-16">
                    <div className="w-full sm:w-4/5 md:w-3/5 h-48 border-solid py-16 px-8 border-2 border-white rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        {/* <div className="absolute -top-12 rounded-full bg-white w-20 h-20 pt-3 pb-2 flex items-center justify-center">
                            <h2 className="transition-all">#{index + 1}</h2>
                        </div> */}

                        <Image
                            ref={imageRef}
                            fill={true}
                            className="object-cover w-full h-full z-10"
                            src={quiz[index].img}
                            onLoad={() => setLoading(false)}
                        />
                        <div className="bg-black/40 w-full h-full absolute z-10"></div>

                        <h2
                            className={classNames(
                                "text-white text-lg md:text-2xl text-center z-20 transition-all duration-300 ",
                                loading ? "opacity-0 mt-8" : "mt-0 opacity-100"
                            )}
                        >
                            {quiz[index].question}
                        </h2>
                    </div>
                    {quiz[index].answers.map((answer, idx) => (
                        <button
                            disabled={loading}
                            key={idx}
                            onClick={() => {
                                let tempAnswers = [...answers];
                                tempAnswers[index] = answer;
                                setAnswers(tempAnswers);
                                if (index < quiz.length - 1) setIndex(index + 1);
                            }}
                            className={classNames(
                                "disabled:opacity-60 disabled:cursor-not-allowed transition-all ease-in-out duration-300 hover:bg-white hover:!text-black  w-full sm:w-4/5 md:w-3/5 h-16 text-white p-4 border-solid border-2 border-white rounded-lg flex my-1 items-center justify-center",
                                answers[index] === answer ? "bg-white !text-black" : "text-white"
                            )}
                        >
                            {answer}
                        </button>
                    ))}
                    <div className="w-full flex items-center justify-center gap-2 py-4">
                        {quiz.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setIndex(idx)}
                                className={classNames(
                                    "w-4 h-4 rounded-full border-white",
                                    idx === index ? "opacity-100" : "opacity-40",
                                    answers[idx] !== "" ? "bg-yellow-400" : "bg-white"
                                )}
                            ></button>
                        ))}
                    </div>
                    <div className="w-full flex items-center justify-center gap-2 py-4">
                        <button
                            onClick={() => alert("Coming Soon")}
                            disabled={answers.find((val) => val === "") !== undefined}
                            className="disabled:cursor-not-allowed disabled:opacity-60  border-2 border-solid border-white uppercase text-white p-4 font-semibold"
                        >
                            Know what warrior you are
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Quiz;
