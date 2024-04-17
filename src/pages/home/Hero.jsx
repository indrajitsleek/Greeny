import Slider from "react-slick";

export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000

    };
    return (
        <section className="home-index-slider slider-arrow slider-dots">
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className="banner-part banner-1">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="banner-content">
                                            <h1>free home delivery within 24 hours now.</h1>
                                            <p>
                                                Lorem ipsum dolor consectetur adipisicing elit modi consequatur
                                                eaque expedita porro necessitatibus eveniet voluptatum quis pariatur
                                                Laboriosam molestiae architecto excepturi
                                            </p>
                                            <div className="banner-btn">
                                                <a className="btn btn-inline" href="shop-4column.html">
                                                    <i className="fas fa-shopping-basket" />
                                                    <span>shop now</span>
                                                </a>
                                                <a className="btn btn-outline" href="offer.html">
                                                    <i className="icofont-sale-discount" />
                                                    <span>get offer</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="banner-img">
                                            <img src="images/01.png" alt="index" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="banner-part banner-1">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="banner-content">
                                            <h1>free home delivery within 24 hours now.</h1>
                                            <p>
                                                Lorem ipsum dolor consectetur adipisicing elit modi consequatur
                                                eaque expedita porro necessitatibus eveniet voluptatum quis pariatur
                                                Laboriosam molestiae architecto excepturi
                                            </p>
                                            <div className="banner-btn">
                                                <a className="btn btn-inline" href="shop-4column.html">
                                                    <i className="fas fa-shopping-basket" />
                                                    <span>shop now</span>
                                                </a>
                                                <a className="btn btn-outline" href="offer.html">
                                                    <i className="icofont-sale-discount" />
                                                    <span>get offer</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="banner-img">
                                            <img src="images/01.png" alt="index" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        </section>
    )
}
