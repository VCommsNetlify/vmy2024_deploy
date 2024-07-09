"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import quiz from "../../../public/data/quiz.json";
import result from "../../../public/data/result.json";
import Image from "next/image";
import LoadingIndicator from "../Loading";
import warrior from "../../../public/data/warrior.json";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const getWarriorType = (answers) => {
    let highest = null;
    let calc = {};

    Object.keys(result).forEach((key) => {
        let match = 0;
        for (let i = 0; i < answers.length; i++) if (answers[i] === result[key][i]) match += 1;
        calc[key] = (match / result[key].length) * 100;
    });

    Object.keys(calc).forEach((key) => {
        if (highest === null) {
            highest = [{ key: key, value: calc[key] }];
        } else if (highest[0].value < calc[key]) {
            highest = [{ key: key, value: calc[key] }];
        } else if (highest[0].value === calc[key]) {
            highest.push({ key: key, value: calc[key] });
        }
    });

    return highest;
};

const Result = ({ answers, setCompleted, setAnswers, setIndex, resultPreview }) => {
    const [loading, setLoading] = useState(true);
    const [resultIndex, setResultIndex] = useState(0);
    let finalResult = getWarriorType(answers);
    finalResult = [finalResult[Math.floor(Math.random() * finalResult.length)]];

    if (resultPreview) finalResult = [{ key: resultPreview, value: 100 }];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <LoadingIndicator className="!h-32 !w-32 text-white" />;

    return (
        <div className="mx-auto container w-full md:w-3/5">
            <div className="min-h-64 w-full border-solid border-2 border-white rounded-md p-8 flex flex-col gap-2 items-center justify-center text-center text-white py-16 relative">
                {finalResult.map((item, idx) => {
                    return (
                        <Fragment key={idx}>
                            <Image
                                fill={true}
                                className={classNames(
                                    "object-cover w-full h-full z-10 transition-all duration-300",
                                    resultIndex === idx ? "opacity-100" : "opacity-0"
                                )}
                                src={warrior[item.key].img}
                            />
                            <div
                                className={classNames(
                                    "bg-black/60 w-full h-full absolute z-20",
                                    resultIndex === idx ? "block" : "hidden"
                                )}
                            ></div>
                            <h5
                                className={classNames(
                                    "tracking-widest mb-2 z-20",
                                    resultIndex === idx ? "block" : "hidden"
                                )}
                            >
                                YOU ARE A:
                            </h5>
                            <div className="flex gap-4 items-center">
                                {finalResult.length > 1 && (
                                    <button
                                        className={classNames(
                                            "text-3xl text-white z-30 disabled:opacity-60 disabled:cursor-not-allowed",
                                            resultIndex === idx ? "block" : "hidden"
                                        )}
                                        disabled={resultIndex === 0}
                                        onClick={() => {
                                            setResultIndex(resultIndex - 1);
                                        }}
                                    >
                                        {"←"}
                                    </button>
                                )}
                                <h2
                                    className={classNames(
                                        "font-semibold uppercase tracking-wider text-white z-30 transition-all duration-300",
                                        resultIndex === idx
                                            ? "opacity-100 translate-y-0 block"
                                            : "opacity-0 -translate-y-10 hidden"
                                    )}
                                >
                                    {item.key}
                                </h2>
                                {finalResult.length > 1 && (
                                    <button
                                        className={classNames(
                                            "text-3xl text-white z-30 disabled:opacity-60 disabled:cursor-not-allowed",
                                            resultIndex === idx ? "block" : "hidden"
                                        )}
                                        disabled={resultIndex >= finalResult.length - 1}
                                        onClick={() => setResultIndex(resultIndex + 1)}
                                    >
                                        {"→"}
                                    </button>
                                )}
                            </div>
                            <div
                                className={classNames(
                                    "text-center text-white font-light flex flex-col gap-2 items-center justify-center z-30 transition-all duration-300",
                                    resultIndex === idx
                                        ? "opacity-100 translate-y-0 block"
                                        : "opacity-0 -translate-y-10 hidden"
                                )}
                                dangerouslySetInnerHTML={{ __html: warrior[item.key].description }}
                            ></div>
                        </Fragment>
                    );
                })}

                <div className="flex items-center justify-center gap-8 py-4 z-30">
                    <a
                        target="_blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/?result=${finalResult[0].key}%23warrior-type`}
                    >
                        <img src="assets/3-Events-Gallery/4-Channels/FB-logo.png" className="w-12" alt="FB" />
                    </a>
                    <a
                        target="_blank"
                        href={`http://x.com/share?text=I just found out that my warrior type is %23${finalResult[0].key}. Find out your warrior type! %23vmalaysia2024&url=${window.location.origin}/?result=${finalResult[0].key}%23warrior-type`}
                    >
                        <img src="assets/3-Events-Gallery/4-Channels/X-logo.png" className="w-12" alt="X" />
                    </a>
                </div>

                <button
                    onClick={() => {
                        setIndex(0);
                        setAnswers(quiz.map(() => ""));
                        setCompleted(false);
                    }}
                    className="z-20 border-solid border border-white rounded-md uppercase tracking-wide bg-white transition-all duration-300  hover-hover:hover:!bg-transparent hover-hover:hover:!text-white px-4 py-2"
                >
                    {resultPreview ? "Try it Yourself?" : "Try again?"}
                </button>
            </div>
        </div>
    );
};

const Quiz = ({}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    console.log(searchParams.get("result"));
    const imageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(quiz.map(() => ""));
    const [completed, setCompleted] = useState(false);
    const [startScreen, setStartScreen] = useState(true);

    useEffect(() => {
        if (searchParams.get("result")) {
            setStartScreen(false);
            setCompleted(true);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
    }, [index]);

    return (
        <section className="min-h-[50vh] w-full">
            <div id="warrior-type" className="anchor"></div>

            <section id="warrior-type-section" className="warrior">
                <div className="mx-auto container">
                    <img
                        src="assets/Headers/Warrior Type Header.png"
                        id="warrior-sec"
                        className="w-full md:w-[60vw]"
                        alt="Gallery Header"
                    />
                </div>
                <div className="w-full flex items-center justify-center"></div>

                {startScreen ? (
                    <div className="flex min-h-[80vh] px-4 items-center py-4 md:py-16 justify-start text-white text-center flex-col gap-4">
                        <h3>It is time to RISE AGAIN and show the world how unstoppable we are.</h3>
                        <h4>Take this quiz and discover what kind of warrior you are.</h4>
                        <button
                            onClick={() => setStartScreen(false)}
                            className="text-2xl transition-all duration-300 ease-in-out my-8 bg-[#4B69FF] disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-60  border-2 border-solid border-white uppercase text-white px-4 py-2 font-semibold"
                        >
                            Start!
                        </button>
                        <div className="flex items-center justify-center gap-8 py-4">
                            <a href="https://www.facebook.com/thevofficial">
                                <img src="assets/3-Events-Gallery/4-Channels/FB-logo.png" className="w-12" alt="FB" />
                            </a>
                            <a href="https://instagram.com/thev_official">
                                <img src="assets/3-Events-Gallery/4-Channels/IG-logo.png" className="w-12" alt="IG" />
                            </a>
                            <a href="https://twitter.com/thev_official">
                                <img src="assets/3-Events-Gallery/4-Channels/X-logo.png" className="w-12" alt="X" />
                            </a>
                        </div>
                    </div>
                ) : completed ? (
                    <div className="flex min-h-[80vh] py-16 items-center justify-center">
                        <Result
                            answers={answers}
                            setAnswers={setAnswers}
                            setCompleted={setCompleted}
                            setIndex={setIndex}
                            resultPreview={searchParams.get("result")}
                        />
                    </div>
                ) : (
                    <div className="mx-auto container pb-16">
                        <div className="w-full sm:w-4/5 md:w-3/5 h-48 border-solid py-16 px-8 border-2 border-white rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                            {/* <div className="absolute -top-12 rounded-full bg-white w-20 h-20 pt-3 pb-2 flex items-center justify-center">
                            <h2 className="transition-all">#{index + 1}</h2>
                        </div> */}
                            <div
                                className={classNames(
                                    "w-full h-full absolute z-20 flex items-center justify-center",
                                    loading ? "bg-black" : "bg-black/40"
                                )}
                            >
                                {loading && <LoadingIndicator className="!w-16 !h-16" />}
                            </div>

                            <Image
                                ref={imageRef}
                                fill={true}
                                className="object-cover w-full h-full z-10"
                                src={quiz[index].img}
                                onLoad={() => setLoading(false)}
                            />

                            <h2
                                className={classNames(
                                    "text-white text-lg md:text-2xl text-center z-30 transition-all duration-300 ",
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
                                    if (index < quiz.length - 1) {
                                        setIndex(index + 1);
                                    } else {
                                        setCompleted(true);
                                        router.push("?#warrior-type");
                                    }
                                }}
                                className={classNames(
                                    "disabled:opacity-60 disabled:cursor-not-allowed transition-all ease-in-out duration-300 hover-hover:hover:!bg-white hover-hover:hover:!text-black  w-full sm:w-4/5 md:w-3/5 h-16 text-white p-4 border-solid border-2 border-white rounded-lg flex my-1 items-center justify-center",
                                    answers[index] === answer
                                        ? "bg-white !text-black pt-4"
                                        : "bg-transparent text-white pt-0",
                                    loading ? "!text-transparent pt-8" : "pt-0"
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
                        {/* <div className="w-full flex items-center justify-center gap-2 py-4">
                            <button
                                onClick={() => setCompleted(true)}
                                disabled={answers.find((val) => val === "") !== undefined}
                                className=" transition-all duration-300 ease-in-out bg-[#4B69FF] disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-60  border-2 border-solid border-white uppercase text-white p-4 font-semibold"
                            >
                                Know what warrior you are
                            </button>
                        </div> */}
                    </div>
                )}
            </section>
        </section>
    );
};

export default Quiz;
