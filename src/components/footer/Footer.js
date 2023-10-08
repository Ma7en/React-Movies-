/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-brand">
                        <img
                            src="./images/logo.png"
                            alt="a"
                            className="footer-logo"
                        />
                        <p className="slogan">
                            Movies &amp; TV Shows, Online cinema, Movie database
                            HTML Template.
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
                                <a href="#">About us</a>
                            </li>
                            <li className="link-item">
                                <a href="#">My profile</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Pricing plans</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                        <ul>
                            <h4 className="link-heading">Browse</h4>
                            <li className="link-item">
                                <a href="#">Live Tv</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Live News</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Live Sports</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Streaming Library</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="link-item">
                                <a href="#">TV Shows</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Movies</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Kids</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Collections</a>
                            </li>
                        </ul>
                        <ul>
                            <h4 className="link-heading">Help</h4>
                            <li className="link-item">
                                <a href="#">Account &amp; Billing</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Plans &amp; Pricing</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Supported devices</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="copyright">
                        <p>© copyright {year} React</p>
                    </div>
                    <div className="wrapper">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms and conditions</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
