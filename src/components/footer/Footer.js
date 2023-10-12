/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-brand">
                        <img
                            // src="./images/logo.png"
                            src={logo}
                            alt="footer-logo"
                            className="footer-logo"
                        />
                        <p className="slogan">
                            Movies &amp; TV Shows, Online cinema, Movie database
                            ReactJS Template.
                        </p>
                        <div className="social-link">
                            <a href="#">
                                <ion-icon name="logo-facebook" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-twitter" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-instagram" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-tiktok" />
                            </a>
                            <a href="#">
                                <ion-icon name="logo-youtube" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <h4 className="link-heading">CineFlix</h4>
                            <li className="link-item">
                                <Link to="/aboutus">About us</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">My profile</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Pricing plans</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Contacts</Link>
                            </li>
                        </ul>

                        <ul>
                            <h4 className="link-heading">Browse</h4>
                            <li className="link-item">
                                <Link to="/editing">Live Tv</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Live News</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Live Sports</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Streaming Library</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="link-item">
                                <Link to="/editing">TV Shows</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Movies</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Kids</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Collections</Link>
                            </li>
                        </ul>
                        <ul>
                            <h4 className="link-heading">Help</h4>
                            <li className="link-item">
                                <Link to="/editing">Account &amp; Billing</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Plans &amp; Pricing</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Supported devices</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/editing">Accessibility</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="copyright">
                        <p>© copyright {year} React</p>
                    </div>
                    <div className="wrapper">
                        <Link to="/editing">Privacy policy</Link>
                        <Link to="/editing">Terms and conditions</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
