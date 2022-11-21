import React from "react";
import rectangle from "../images/footer/Rectangle.png"
import f from "../images/footer/f.png"
import twitter from "../images/footer/twitter.png"
import instagram from "../images/footer/instagram.png"

function Footer() {
    return (
        <div className="Footer">
            <div className="footer">
                <div className="row">
                    <div className="col-lg-4 footer-name">
                        <h3 className="footer-item">Outing.</h3>
                        <p className="footer-item__list">©2022 webdesign.gdn All Rights Reserved</p>
                        <div className="footer-icon">
                            <div className="footer-img">
                                <img className="footer-img__rectangle__1" src={rectangle} />
                                <img className="footer-img__logo__1" src={f} />
                            </div>
                            <div className="footer-img">
                                <img className="footer-img__rectangle__2" src={rectangle} />
                                <img className="footer-img__logo__2" src={twitter} />
                            </div>
                            <div className="footer-img">
                                <img className="footer-img__rectangle__3" src={rectangle} />
                                <img className="footer-img__logo__3" src={instagram} />
                            </div>



                        </div>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Home</h5>
                        <hr></hr>
                        <p className="footer-item__list">Home</p>
                        <p className="footer-item__list">Features</p>
                        <p className="footer-item__list">Service</p>
                        <p className="footer-item__list">Feedback</p>
                        <p className="footer-item__list">Contact</p>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Company</h5>
                        <hr></hr>
                        <p className="footer-item__list">Service</p>
                        <p className="footer-item__list">Contact</p>
                        <p className="footer-item__list">Review</p>
                        <p className="footer-item__list">About</p>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Discover</h5>
                        <hr></hr>
                        <p className="footer-item__list">Trust and Security</p>
                        <p className="footer-item__list">Terms</p>
                        <p className="footer-item__list">New trips</p>
                        <p className="footer-item__list">Policy</p>
                    </div>
                    <div className="col-lg-2 footer-menu">
                        <h5 className="footer-item">Contact</h5>
                        <hr></hr>
                        <p className="footer-item__list">+880 1706499216</p>
                        <p className="footer-item__list">hellobesnik@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer