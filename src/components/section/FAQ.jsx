"use client";
import React, { useEffect, useState } from "react";
import data from "../../../public/data/faq.json";
import classNames from "classnames";

const FAQItem = ({ question, answer }) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <button className={classNames("faqs-accordion", active && "active")} onClick={() => setActive(!active)}>
                <span className="translate" data-key="faqs-1">
                    {question}
                </span>
            </button>
            <div
                className={classNames("faqs-panel", active && "!block")}
                dangerouslySetInnerHTML={{ __html: answer }}
            ></div>
        </>
    );
};

const FAQ = () => {
    const [faq, setFaq] = useState([]);
    const [viewMore, setViewMore] = useState(false);

    useEffect(() => {
        if (viewMore) setFaq(data);
        else setFaq(data.slice(0, 4));
    }, [viewMore]);

    return (
        <>
            <div id="faqs-sec" className="anchor"></div>
            <section id="faqs-section" className="faqs">
                <h1 className="faqs-title translate" data-key="faqs-title">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <div className="faqs-menu">
                    {faq.map((item, idx) => (
                        <FAQItem key={idx} {...item} />
                    ))}
                    <button onClick={() => setViewMore(!viewMore)} id="viewMoreBtn" className="view-more">
                        {" "}
                        VIEW {viewMore ? "LESS" : "MORE"}
                    </button>
                </div>
            </section>
        </>
    );
};

export default FAQ;
