import React from "react";
import jake from "../images/main/jake.png"
import marta from "../images/main/marta.png"
import rebe from "../images/main/rebe.png"
import floating_city from "../images/main/Floating city.png"
import Mountain from "../images/main/Mountain.png"
import The_village from "../images/main/The village.png"
import The_red_house from "../images/main/The red house.png"
import video from "../images/main/video.png"
import Ellipse from "../images/main/Ellipse.png"
import Polygon from "../images/main/Polygon.png"
import blog_1 from "../images/main/blog-1.png"
import blog_2 from "../images/main/blog-2.png"
import blog_3 from "../images/main/blog-3.png"
import people_1 from "../images/main/people-1.png"
import people_2 from "../images/main/people-2.png"
import people_3 from "../images/main/people-3.png"
import Button from 'react-bootstrap/Button';

function Main() {
    return (
        <div className="Main">
            <div className="main">
                {/* start introduce */}
                <div className="introduce">
                    <div className="introduce-title">
                        <div className="row">
                            <div className="col-lg-5">
                                <h1>
                                    Explore top destinations
                                </h1>
                                <p>Explore your suitable and dream places around the world. Here you can find your right destination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src={jake} />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src={marta} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <img src={rebe} />
                        </div>
                    </div>
                </div>
                {/* End introduce */}
                {/* Start booking */}
                <div className="booking">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 booking-title">
                            <h1>Best trip package</h1>
                            <p>Explore your suitable and dream places around the world. Here you can find your right destination.</p>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    <div className="product-booking">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="product">
                                    <div className="booking-price">
                                        <img className="booking-img" src={floating_city} />
                                        <div className="price">$350</div>
                                    </div>
                                    <div className="booking-name">
                                        <h4>
                                            Floating city
                                        </h4>
                                        <p>Enjoy the floating city in Serbia. That’s an amazing place.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product">
                                    <div className="booking-price">
                                        <img className="booking-img" src={Mountain} />
                                        <div className="price">$250</div>
                                    </div>
                                    <div className="booking-name">
                                        <h4>
                                            Mountain
                                        </h4>
                                        <p>Enjoy the mountain of zurich. That is so amazing for trip.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product">
                                    <div className="booking-price">
                                        <img className="booking-img" src={The_village} />
                                        <div className="price">$150</div>
                                    </div>
                                    <div className="booking-name">
                                        <h4>
                                            The village
                                        </h4>
                                        <p>The village is a city you will feel you are in a village.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product">
                                    <div className="booking-price">
                                        <img className="booking-img" src={The_red_house} />
                                        <div className="price">$750</div>
                                    </div>
                                    <div className="booking-name">
                                        <h4>
                                            The red house
                                        </h4>
                                        <p>The red house is the great place for anyone to visit.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="btn-view-all">
                            <Button>View All</Button>
                        </div>
                    </div>
                </div>
                {/* End Booking */}
            </div>
            {/* Start video */}
            <div className="Video">
                <div className="video">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 title-video">
                            <h1>Start your trip now!</h1>
                            <p>Explore your suitable and dream places around the world. Here you can find your right destination.</p>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    <div className="video-icon">
                        <img className="video-icon__lg" src={video} />
                        <img className="video-icon__md" src={Ellipse} />
                        <img className="video-icon__sm" src={Polygon} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 input-email">
                        <input placeholder="Enter your email to join" />
                        <hr />
                        <Button>Get Listed</Button>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
            {/* End Video */}
            {/* Start Blog */}
            <div className="Blog">
                <div className="blog">
                    <div className="blog-decs">
                        <div className="blog-title">
                            <h1>Our blog</h1>
                            <p>Read our regular travel blog and know the latest update of tour and travel</p>
                        </div>
                        <div className="blog-link-read">
                            <h6>Read All Blog</h6>
                        </div>
                    </div>
                    <div className="blog-stories">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="blog-stats">
                                    <img className="blog-stats__img" src={blog_1} />
                                    <div className="blog-item">
                                        <div className="blog-name">
                                            <h5>The proper guidelines of going the red house</h5>
                                        </div>
                                        <div className="blog-author">
                                            <div className="blog-author__name">
                                                <img src={people_1} />
                                                <p>Ben Stokes</p>
                                            </div>
                                            <p className="blog-read-more">Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-stats">
                                    <img className="blog-stats__img" src={blog_2} />
                                    <div className="blog-item">
                                        <div className="blog-name">
                                            <h5>The proper guidelines of going the red house</h5>
                                        </div>
                                        <div className="blog-author">
                                            <div className="blog-author__name">
                                                <img src={people_2} />
                                                <p>Ben Cooper</p>
                                            </div>
                                            <p className="blog-read-more">Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-stats">
                                    <img className="blog-stats__img" src={blog_3} />
                                    <div className="blog-item">
                                        <div className="blog-name">
                                            <h5>The proper guidelines of going the red house</h5>
                                        </div>
                                        <div className="blog-author">
                                            <div className="blog-author__name">
                                                <img src={people_3} />
                                                <p>Kevin Peter</p>
                                            </div>
                                            <p className="blog-read-more">Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main