export default function HeaderBottom() {
    return (
        <header className="header-part">
            <div className="container">
                <div className="header-content">
                    <div className="header-media-group">
                        <button className="header-user">
                            <img src="images/user.png" alt="user" />
                        </button>
                        <a href="index.html">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                        <button className="header-src">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                    <a href="index.html" className="header-logo">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                    <a href="login.html" className="header-widget" title="My Account">
                        <img src="images/user.png" alt="user" />
                        <span>join</span>
                    </a>
                    <form className="header-form">
                        <input type="text" placeholder="Search anything..." />
                        <button>
                            <i className="fas fa-search" />
                        </button>
                    </form>
                    <div className="header-widget-group">
                        <a href="compare.html" className="header-widget" title="Compare List">
                            <i className="fas fa-random" />
                            <sup>0</sup>
                        </a>
                        <a href="wishlist.html" className="header-widget" title="Wishlist">
                            <i className="fas fa-heart" />
                            <sup>0</sup>
                        </a>
                        <button className="header-widget header-cart" title="Cartlist">
                            <i className="fas fa-shopping-basket" />
                            <sup>9+</sup>
                            <span>
                                total price<small>$345.00</small>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}
