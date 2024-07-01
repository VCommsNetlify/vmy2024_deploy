import React from "react";

const Merch = () => {
    return (
        <section>
            <div
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
            </div>
        </section>
    );
};

export default Merch;
