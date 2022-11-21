import React from "react";
import Button from 'react-bootstrap/Button';
import header_img_1 from "../images/header/header-img-1.png"
import header_img_2 from "../images/header/header-img-2.png"
import header_img_3 from "../images/header/header-img-3.png"
import header_ellipse_lg from "../images/header/header-ellipse-lg.png"
import header_ellipse_md from "../images/header/header-ellipse-md.png"
import header_polygon from "../images/header/header-polygon.png"


function Header() {
    return (
        <div className="Header">
            <div className="header">
                <div className="header-nav">
                    <div className="header-name">
                        <h3 className="header-nav__item" >Outing.</h3>
                        <i className="bi bi-search"></i>
                        <input className="header-nav__item" placeholder="Search for destinations..." />
                    </div>
                    <div className="header-menu">
                        <p className="header-menu__item">Home</p>
                        <p className="header-menu__item">Destinations</p>
                        <p className="header-menu__item">Pricing</p>
                        <p className="header-menu__item">Reviews</p>
                        <Button className="header-menu__item">Contact us</Button>
                    </div>
                </div>
            </div>
            <div className="header-stats">
                <div className="row">
                    <div className="col-lg-7 header-img">
                        <div className="header-img__1__2">
                            <img className="header-img__1" src={header_img_1} />
                            <img className="header-img__2" src={header_img_2} />
                        </div>
                        <div className="header-img__3">
                            <img src={header_img_3} />
                        </div>
                    </div>
                    <div className="col-lg-5 header-title">
                        <h1>The perfect partner of your best trip.</h1>
                        <p>Make your travel more enjoyable with us. We are the best travel agency and we are providing the best travel services for our clients.</p>
                        <div className="row">
                            <div className="col-lg-4">
                                <Button className="header-icon">Plan a trip</Button>
                            </div>
                            <div className="col-lg-4 header-icon">
                                <div className="header-img__icon">
                                    <img className="header-ellipse__lg" src={header_ellipse_lg} />
                                    <img className="header-ellipse__md" src={header_ellipse_md} />
                                    <img className="header-polygon" src={header_polygon} />
                                </div>
                            </div>
                            <div className="col-lg-4 about-story">
                                <h6 className="header-icon">Watch our Story</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header