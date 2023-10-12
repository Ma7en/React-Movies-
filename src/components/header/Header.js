/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import logo from "./../../public/images/logo.png";
import logo from "../../images/logo.png";

const Header = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const isActive = true;

    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=26e787bfb38f61a94491f3e7a2356c4e&query=${query}`
                );
                setSearchResults(response.data.results);
            } catch (error) {
                console.error("Error searching movies:", error);
            }
        }
    };

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
                        {/* <img src="./images/logo.png" alt="logo" /> */}
                        <img src={logo} alt="logo" />
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
                        </ul>
                    </nav>

                    <div className="navbar-actions">
                        <form
                            action="#"
                            className="navbar-form"
                            onSubmit={handleSearch}
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="I'm looking for..."
                                className="navbar-form-search"
                                value={query}
                                // onChange={(e) => setQuery(e.target.value)}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    if (!e.target.value) {
                                        setSearchResults([]);
                                    }
                                }}
                            />
                            <button type="submit" className="navbar-form-btn">
                                <ion-icon name="search-outline" />
                            </button>

                            <button
                                type="button"
                                className="navbar-form-close"
                                onClick={() => {
                                    setQuery("");
                                    setSearchResults([]); // هذا السطر يقوم بمسح نتائج البحث المخزنة
                                }}
                            >
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
            {searchResults.length > 0 && (
                <section className="movies">
                    <div className="movies-grid">
                        {searchResults.map((movie) => (
                            <div className="movie-card" key={movie.id}>
                                <div className="card-head">
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt=""
                                        className="card-img"
                                    />
                                    <div className="card-overlay">
                                        <div className="bookmark">
                                            <ion-icon name="bookmark-outline" />
                                        </div>
                                        <div className="rating">
                                            <ion-icon name="star-outline" />
                                            <span>{movie.vote_average}</span>
                                        </div>
                                        <div className="play">
                                            <ion-icon name="play-circle-outline" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {movie.title}
                                    </h3>
                                    <div className="card-info">
                                        <span className="genre">
                                            Action/Comedy
                                        </span>
                                        <span className="year">
                                            {new Date(
                                                movie.release_date
                                            ).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Header;
