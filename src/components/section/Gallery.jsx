import React from "react";

const Gallery = () => {
    return (
        <>
            <div id="gallery-sec" className="anchor"></div>
            <section id="gallery-section" className="gallery">
                <div className="container mx-auto mb-4">
                    <img
                        src="assets/Headers/Gallery Header.png"
                        id="gal-sec"
                        className="w-full md:w-[60vw]"
                        alt="Gallery Header"
                    />
                </div>
                <div className="row galleries">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="col-lg-4 col-md-4 col-sm-4 photo-album h-[200px] sm:h-auto relative">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2024-september-day-0-registration-day-gallery-v-limitless"
                                className="w-full h-full block relative"
                            >
                                <img
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Reg Day/8.jpg"
                                    alt="Photo 1"
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <div className="caption-img">#VMalaysia2024 September: Day 0 Registration Day Gallery</div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 photo-album h-[200px] sm:h-auto">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2024-september-day-1-gallery-v-limitless"
                                className="w-full h-full block relative"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Day 1/48.jpg"
                                    alt="Photo 2"
                                />
                            </a>
                            <div className="caption-img">#VMalaysia2024 September: Day 1 Gallery</div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 photo-album h-[200px] md:h-auto">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2024-day-2-gallery"
                                className="w-full h-full block relative"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Day 2/182.jpg"
                                    alt="Photo 3"
                                />
                            </a>
                            <div className="caption-img">VMalaysia 2024 - May 12-16 - Day 2</div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="col-lg-2 col-md-2 col-sm-2 photo-album h-[200px] sm:h-auto">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2024-day-3-gallery"
                                className="w-full h-full block relative"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Day 3/181.jpg"
                                    alt="Photo 3"
                                />
                            </a>
                            <div className="caption-img">VMalaysia 2024 - May 12-16 - Day 3</div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 photo-album h-[200px] sm:h-auto">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2023-17-21-september-day-3-gallery"
                                className="w-full h-full block relative"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Day 4/112.jpg"
                                    alt="Photo 4"
                                />
                            </a>
                            <div className="caption-img">VMalaysia 2024 - May 12-16 - Day 4</div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 photo-album h-[200px] sm:h-auto ">
                            <a
                                href="https://the-v.net/en/album/vmalaysia2023-8-12-september-day-2-gallery"
                                className="w-full h-full block relative"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src="assets/3-Events-Gallery/2-Gallery-Image/Day 5/106.jpg"
                                    alt="Photo 2"
                                />
                            </a>
                            <div className="caption-img">VMalaysia 2023 - Sep 8-12 - Day 2</div>
                        </div>
                    </div>
                </div>
                <div className="row col-12 view-gallery">
                    <p>
                        <a href="https://the-v.net/en/galleries" id="view-gallery-link" data-key="gallery-view-more">
                            VIEW MORE GALLERY
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Gallery;
