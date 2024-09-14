"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../../public/data/carousel.json";
import mobileData from "../../../public/data/carousel-mobile.json";

const CarouselItem = ({ img, idx }) => {
    return (
        <div className="h-auto  w-screen relative">
            <img className="object-cover h-full w-full " src={img} alt={`Slide ${idx + 1}`} />
        </div>
    );
};

/**
 * 
 * @returns <img
                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: "block",
                        height: "100%",
                        margin: "auto",
                        width: "100%",
                    }}
                />
 */

const Merch = () => {
    return (
        <section id="merch-carousel" className="max-h-auto  h-full relative">
            <div className="absolute w-full top-0 merch-accordion merch-gradient pb-32 md:pb-64">
                <h1 className="translate">BE UNSTOPPABLE WITH STYLE</h1>
                <p className="translate" data-key="merch-description">
                    Pursuing greatness comes with great style. Check out this unstoppable merchandise collection soon
                    available at the Limitless Store.
                </p>
            </div>
            <Carousel
                additionalTransform={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className="h-auto block lg:hidden "
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 0,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                rewind={true}
                rewindWithAnimation={true}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {mobileData.map((item, idx) => (
                    <CarouselItem key={idx} idx={idx} {...item} />
                ))}
            </Carousel>
            <Carousel
                additionalTransform={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className="h-auto hidden lg:block"
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 0,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 0,
                    },
                }}
                rewind={true}
                rewindWithAnimation={true}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {data.map((item, idx) => (
                    <CarouselItem key={idx} idx={idx} {...item} />
                ))}
            </Carousel>

            {/* <div
                id="merch-carousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="3000"
                style={{ backgroundColor: "darkgreen" }}
            >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        {" "}
                        <img
                            className="d-block mx-auto"
                            src="assets/3-Events-Gallery/1-Merch/061924-Merch-Carousel-1.png"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        {" "}
                        <img
                            className="d-block mx-auto"
                            src="assets/3-Events-Gallery/1-Merch/061924-Merch-Carousel-2.png"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        {" "}
                        <img
                            className="d-block mx-auto"
                            src="assets/3-Events-Gallery/1-Merch/061924-Merch-Carousel-3.png"
                            alt="Third slide"
                        />
                    </div>
                    <div className="carousel-item">
                        {" "}
                        <img
                            className="d-block mx-auto"
                            src="assets/3-Events-Gallery/1-Merch/061924-Merch-Carousel-4.png"
                            alt="Fourth slide"
                        />
                    </div>
                    <div className="carousel-item">
                        {" "}
                        <img
                            className="d-block mx-auto"
                            src="assets/3-Events-Gallery/1-Merch/061924-Merch-Carousel-5.png"
                            alt="Fifth slide"
                        />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    {" "}
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>{" "}
                    <span className="sr-only">Previous</span>{" "}
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                    {" "}
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>{" "}
                    <span className="sr-only">Next</span>{" "}
                </a>
                <div className="col-12 justify-content-center merch-accordion merch-gradient">
                    <h1 className="translate" data-key="merch-title">
                        YOUR UNSTOPPABLE STYLE
                    </h1>
                    <p className="translate" data-key="merch-description">
                        Pursuing greatness comes with great style. Check out this unstoppable merchandise collection
                        soon available at the Limitless Store.
                    </p>
                </div>
            </div> */}
        </section>
    );
};

export default Merch;
