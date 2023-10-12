/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const MovieDetails = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const { id } = useParams();
    const [genres, setGenres] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});

    // تحويل الوقت إلى الشكل المطلوب
    const hours = Math.floor(movieDetails.runtime / 60);
    const minutes = movieDetails.runtime % 60;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=26e787bfb38f61a94491f3e7a2356c4e`
                );
                // console.log(`response.data: `, response.data);
                setMovieDetails(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );
                // console.log("Movie Details:", response.data);
                // console.log(response.data);
                // console.log(response.data.genres);
                setGenres(response.data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };
        fetchGenres();
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .filter(Boolean)
            .join(", ");
    };

    if (!movieDetails) {
        return <p>Loading...</p>;
    }
    const genresDisplay =
        movieDetails && movieDetails.genres
            ? movieDetails.genres.map((genre) => genre.name).join(" / ")
            : "";

    return (
        <>
            <section className="banner">
                <div className="banner-card">
                    <img
                        // src={`${imagePath}${movieDetails.poster_path}`}
                        src={`${imagePath}${movieDetails.backdrop_path}`}
                        className="banner-img"
                        alt={movieDetails.title}
                    />
                    <div className="card-content">
                        <div className="card-info">
                            <div className="genre">
                                <ion-icon name="film" />
                                <span>{genresDisplay}</span>
                            </div>
                            <div className="year">
                                <ion-icon name="calendar" />
                                <span>
                                    {new Date(
                                        movieDetails.release_date
                                    ).getFullYear()}
                                </span>
                            </div>
                            <div className="duration">
                                <ion-icon name="time" />
                                <span>
                                    {hours}h {minutes}m
                                </span>
                            </div>
                            <div className="quality">4K</div>
                        </div>
                        <h2 className="card-title">{movieDetails.title}</h2>
                    </div>
                </div>
                <Link
                    to="/#movies"
                    className="goback"
                    style={{ textAlign: "center" }}
                >
                    Go Back
                </Link>
            </section>

            {/* <section className="moviesdetails">
                <div className="movies-grid">
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src={`${imagePath}${movieDetails.poster_path}`}
                                alt={movieDetails.title}
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>{movieDetails.vote_average}</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{movieDetails.title}</h3>
                            <div className="card-info">
                                <span className="genre">
                                        //  {getGenreNames(movie.genre_ids)}
                                        {movieDetails.genre_ids &&
                                        getGenreNames(movieDetails.genre_ids)}
                                        // {movieDetails.genres
                                        // ? getGenreNames(movieDetails.genres)
                                        // : console.log("Loading genres...")}
                                </span>

                                <span className="year">
                                    {new Date(
                                        movieDetails.release_date
                                    ).getFullYear()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default MovieDetails;
