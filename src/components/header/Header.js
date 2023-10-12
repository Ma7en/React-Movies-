/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { ThemeContext } from "../../contexts/theme";

const Header = () => {
    const isActive = true;
    const {appTheme,setAppTheme}=useContext(ThemeContext)
    const toggleTheme = () =>{
        setAppTheme(appTheme == 'dark'?'dark':'light' )
    }
    return (
        <>
            <header className="">
                <div className="navbar">
                    <button className="navbar-menu-btn">
                        <span className="one" />
                        <span className="two" />
                        <span className="three" />
                    </button>

                    <a href="#" className="navbar-brand">
                        <img src="./images/logo.png" alt="logo" />
                    </a>

                    <nav className="">
                        <ul className="navbar-nav">
                            <li>
                                <Link to="/" className="navbar-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#category" className="navbar-link">
                                    Category
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#live"
                                    className="navbar-link indicator"
                                >
                                    LIVE
                                </Link>
                            </li>
                            <div className="form-check form-switch mx-2">
                                <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" onClick={toggleTheme}/>
                                <label className="form-check-label" >Dark Mode</label>
                            </div>
                        </ul>
                    </nav>

                    <div className="navbar-actions">
                        <form action="#" className="navbar-form">
                            <input
                                type="text"
                                name="search"
                                placeholder="I'm looking for..."
                                className="navbar-form-search"
                            />
                            <button className="navbar-form-btn">
                                <ion-icon name="search-outline" />
                            </button>
                            <button className="navbar-form-close">
                                <ion-icon name="close-circle-outline" />
                            </button>
                            
                        </form>
                        
                        <button className="navbar-search-btn">
                            <ion-icon name="search-outline" />
                        </button>
                        <Link to="/signup" className="navbar-signin">
                            <span>Sign in</span>
                            <ion-icon name="log-in-outline" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
