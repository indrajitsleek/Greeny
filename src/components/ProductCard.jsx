

export default function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-media">
                <div className="product-label">
                    <label className="label-text sale">sale</label>
                </div>
                <button className="product-wish wish">
                    <i className="fas fa-heart" />
                </button>
                <a className="product-image" href="product-video.html">
                    <img src="images/01.jpg" alt="product" />
                </a>
                <div className="product-widget">
                    <a
                        title="Product Compare"
                        href="compare.html"
                        className="fas fa-random"
                    />
                    <a
                        title="Product Video"
                        href="https://youtu.be/9xzcVxSBbG8"
                        className="venobox fas fa-play"
                        data-autoplay="true"
                        data-vbtype="video"
                    />
                    <a
                        title="Product View"
                        href="#"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                    />
                </div>
            </div>
            <div className="product-content">
                <div className="product-rating">
                    <i className="active icofont-star" />
                    <i className="active icofont-star" />
                    <i className="active icofont-star" />
                    <i className="active icofont-star" />
                    <i className="icofont-star" />
                    <a href="product-video.html">(3)</a>
                </div>
                <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
                </h6>
                <h6 className="product-price">
                    <del>$34</del>
                    <span>
                        $28<small>/piece</small>
                    </span>
                </h6>
                <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket" />
                    <span>add</span>
                </button>
                <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                        <i className="icofont-minus" />
                    </button>
                    <input
                        className="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        defaultValue={1}
                    />
                    <button className="action-plus" title="Quantity Plus">
                        <i className="icofont-plus" />
                    </button>
                </div>
            </div>
        </div>

    )
}
