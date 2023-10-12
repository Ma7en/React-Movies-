/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movieJW, setMovieJW] = useState([]);
    const [error, setError] = useState(null);

    // تحويل الوقت إلى الشكل المطلوب
    const hours = Math.floor(movieJW.runtime / 60);
    const minutes = movieJW.runtime % 60;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const searchResponse = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=26e787bfb38f61a94491f3e7a2356c4e&query=John%20Wick`
                );
                // console.log(searchResponse.data.results);
                if (
                    searchResponse.data.results &&
                    searchResponse.data.results.length > 0
                ) {
                    const movieId = searchResponse.data.results[0].id;
                    // const movieDetailsResponse = await axios.get(
                    //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=26e787bfb38f61a94491f3e7a2356c4e`
                    // );
                    // setMovieJW(movieDetailsResponse.data);

                    axios
                        .get(
                            `https://api.themoviedb.org/3/movie/${movieId}?api_key=26e787bfb38f61a94491f3e7a2356c4e`
                        )
                        .then((response) => {
                            // console.log(response.data);
                            setMovieJW(response.data);
                        });
                } else {
                    setError("Movie not found.");
                }
            } catch (err) {
                setError("An error occurred while fetching movie details.");
            }
        };
        fetchMovieDetails();
    }, []);

    if (error) return <div>{error}</div>;
    if (!movieJW) return <div>Loading...</div>;
    const genresDisplay =
        movieJW && movieJW.genres
            ? movieJW.genres.map((genre) => genre.name).join(" / ")
            : "";

    return (
        <>
            <section className="banner">
                <div className="banner-card">
                    <img
                        src={`${imagePath}${movieJW.poster_path}`}
                        className="banner-img"
                        alt={movieJW.title}
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
                                        movieJW.release_date
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
                        <h2 className="card-title">{movieJW.title}</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
