import Slider from "react-slick";

export default function CategorySlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000

    };
    return (
        <section className="section suggest-part">
            <div className="container">
                <section className="section suggest-part">
                    <div className="container">
                        <ul className="suggest-slider slider-arrow">
                            <Slider {...settings}>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                                <div><li>
                                    <a className="suggest-card" href="shop-4column.html">
                                        <img src="images/01_1.jpg" alt="suggest" />
                                        <h5>
                                            vegetables <span>34 items</span>
                                        </h5>
                                    </a>
                                </li>
                                </div>
                            </Slider>
                        </ul>
                    </div>
                </section>


            </div>
        </section>

    )
}
