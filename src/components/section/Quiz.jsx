"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import quiz from "../../../public/data/quiz.json";
import result from "../../../public/data/result.json";
import Image from "next/image";
import LoadingIndicator from "../Loading";
import warrior from "../../../public/data/warrior.json";

const getWarriorType = (answers) => {
    let highest = null;
    let calc = {};

    Object.keys(result).forEach((key) => {
        let match = 0;
        for (let i = 0; i < answers.length; i++) if (answers[i] === result[key][i]) match += 1;
        calc[key] = (match / result[key].length) * 100;
    });

    Object.keys(calc).forEach((key) => {
        if (highest === null) highest = { key: key, value: calc[key] };
        if (highest.value < calc[key]) highest = { key: key, value: calc[key] };
    });

    return highest;
};

const Result = ({ answers, setCompleted, setAnswers, setIndex }) => {
    const [loading, setLoading] = useState(true);
    const finalResult = getWarriorType(answers);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <LoadingIndicator className="!h-32 !w-32 text-white" />;

    return (
        <div className="mx-auto container w-full md:w-3/5">
            <div className="min-h-64 w-full border-solid border-2 border-white rounded-md p-8 flex flex-col gap-2 items-center justify-center text-center text-white py-16 relative">
                <Image fill={true} className="object-cover w-full h-full z-10" src={warrior[finalResult.key].img} />
                <div className="bg-black/60 w-full h-full absolute z-10"></div>

                <h5 className="tracking-widest mb-2 z-20">YOU ARE A:</h5>
                <h2 className="font-semibold uppercase tracking-wider text-white z-20">{finalResult.key}</h2>
                <div
                    className="text-center text-white font-light flex flex-col gap-2 items-center justify-center z-20"
                    dangerouslySetInnerHTML={{ __html: warrior[finalResult.key].description }}
                ></div>
                <button
                    onClick={() => {
                        setIndex(0);
                        setAnswers(quiz.map(() => ""));
                        setCompleted(false);
                    }}
                    className="z-20 border-solid border border-white rounded-md uppercase tracking-wide bg-white transition-all duration-300  hover-hover:hover:!bg-transparent hover-hover:hover:!text-white px-4 py-2"
                >
                    Try again?
                </button>
            </div>
        </div>
    );
};

const Quiz = () => {
    const imageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(quiz.map(() => ""));
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, [index]);

    return (
        <section className="min-h-[50vh] w-full">
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
                {completed ? (
                    <div className="flex min-h-[80vh] items-center justify-center">
                        <Result
                            answers={answers}
                            setAnswers={setAnswers}
                            setCompleted={setCompleted}
                            setIndex={setIndex}
                        />
                    </div>
                ) : (
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
                                    "disabled:opacity-60 disabled:cursor-not-allowed transition-all ease-in-out duration-300 hover-hover:hover:!bg-white hover-hover:hover:!text-black  w-full sm:w-4/5 md:w-3/5 h-16 text-white p-4 border-solid border-2 border-white rounded-lg flex my-1 items-center justify-center",
                                    answers[index] === answer
                                        ? "bg-white !text-black pt-4"
                                        : "bg-transparent text-white pt-0",
                                    loading ? "text-opacity-0" : "text-opacity-100"
                                )}
                            >
                                {answer}
                            </button>
                        ))}
                        <div className="w-full flex items-center justify-center gap-2 py-4">
                            {quiz.map((_, idx) => (
                                <button
                                    key={idx}
                                    disabled={answers.slice(0, idx).find((val) => val === "") !== undefined}
                                    onClick={() => setIndex(idx)}
                                    className={classNames(
                                        "w-4 h-4 rounded-full border-white disabled:cursor-not-allowed",
                                        idx === index ? "opacity-100" : "opacity-40",
                                        answers[idx] !== "" ? "bg-yellow-400" : "bg-white"
                                    )}
                                ></button>
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 py-4">
                            <button
                                onClick={() => setCompleted(true)}
                                disabled={answers.find((val) => val === "") !== undefined}
                                className=" transition-all duration-300 ease-in-out bg-[#4B69FF] disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-60  border-2 border-solid border-white uppercase text-white p-4 font-semibold"
                            >
                                Know what warrior you are
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </section>
    );
};

export default Quiz;
