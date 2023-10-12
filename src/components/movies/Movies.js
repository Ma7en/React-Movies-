/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [allMovies, setallMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([]);

    // تحويل الوقت إلى الشكل المطلوب
    // const hours = Math.floor(movieJW.runtime / 60);
    // const minutes = movieJW.runtime % 60;

    // =================================
    // الجديد

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=26e787bfb38f61a94491f3e7a2356c4e&page=${currentPage}`
                );
                // console.log(response.data);
                setallMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [currentPage]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                );
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

    // =================================
    // القديم

    // useEffect(() => {
    //     axios
    //         // .get(`https://api.themoviedb.org/3/tv/airing_today`)
    //         .get(`https://api.themoviedb.org/3/movie/popular`, {
    //             params: {
    //                 api_key: apiKey,
    //                 page: pageNumber,
    //                 language: lang,
    //             },
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //             // totalPages = response.data.total_pages;
    //             // console.log(totalPages);
    //             setTotalPages(response.data.total_pages);
    //             setallMovies(response.data.results);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [pageNumber, lang]);

    // const prevPage = () => {
    //     let currentPage = pageNumber;
    //     if (!currentPage <= 1) {
    //         currentPage--;
    //         setPageNumber(currentPage);
    //     }
    // };
    // const NextPage = () => {
    //     let currentPage = pageNumber;
    //     // console.log(totalPages);
    //     if (currentPage < totalPages) {
    //         currentPage++;
    //         setPageNumber(currentPage);
    //     }
    // };

    return (
        <>
            <section className="movies" id="movies">
                <h2 className="section-heading">Movies</h2>

                {/* <div className="filter-bar">
                    <div className="filter-dropdowns">
                        <select name="genre" className="genre">
                            <option value="all genres">All genres</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animal">Animal</option>
                            <option value="animation">Animation</option>
                            <option value="biography">Biography</option>
                        </select>
                        <select name="year" className="year">
                            <option value="all years">All the years</option>
                            <option value={2022}>2022</option>
                            <option value="2020-2021">2020-2021</option>
                            <option value="2010-2019">2010-2019</option>
                            <option value="2000-2009">2000-2009</option>
                            <option value="1980-1999">1980-1999</option>
                        </select>
                    </div>
                    <div className="filter-radios">
                        <input
                            type="radio"
                            name="grade"
                            id="featured"
                            defaultChecked
                        />
                        <label htmlFor="featured">Featured</label>
                        <input type="radio" name="grade" id="popular" />
                        <label htmlFor="popular">Popular</label>
                        <input type="radio" name="grade" id="newest" />
                        <label htmlFor="newest">Newest</label>
                        <div className="checked-radio-bg" />
                    </div>
                </div> */}

                <div className="movies-grid">
                    {allMovies.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <div className="card-head">
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
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
                                        <Link to={`/movieDetails/${movie.id}`}>
                                            <ion-icon name="play-circle-outline" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{movie.title}</h3>
                                <div className="card-info">
                                    <span className="genre">
                                        {getGenreNames(movie.genre_ids)}
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

                <div className="pagination">
                    <button
                        className="pagButton"
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <span>
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        className="pagButton"
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

                {/* <button
                    className="load-more"
                    onClick={prevPage}
                    disabled={pageNumber <= 1 ? true : false}
                >
                    Prev
                </button>

                <button
                    className="load-more"
                    onClick={NextPage}
                    disabled={currentPage >= totalPages ? true : false}
                >
                    Next
                </button> */}
            </section>
        </>
    );
};

export default Movies;
