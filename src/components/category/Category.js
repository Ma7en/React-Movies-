/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Category = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const genresResponse = await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=26e787bfb38f61a94491f3e7a2356c4e`
                );
                // console.log(genresResponse.data);
                // console.log(genresResponse.data.genres);
                const genres = genresResponse.data.genres;

                for (let genre of genres) {
                    const moviesResponse = await axios.get(
                        `https://api.themoviedb.org/3/discover/movie?api_key=26e787bfb38f61a94491f3e7a2356c4e&with_genres=${genre.id}`
                    );
                    genre.firstMovieImage =
                        moviesResponse.data.results[0].poster_path;
                    genre.moviesCount = moviesResponse.data.total_results;
                }
                setCategories(genres);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    if (error) return <div>{error}</div>;
    if (!categories) return <div>Loading...</div>;

    return (
        <>
            <section className="category" id="category">
                <h2 className="section-heading">Category</h2>

                <div className="category-grid">
                    {categories.map((category) => (
                        <div className="category-card" key={category.id}>
                            <img
                                src={`${imagePath}${category.firstMovieImage}`}
                                alt={category.name}
                                className="card-img"
                            />
                            <div className="name">{category.name}</div>
                            <div className="total">{category.moviesCount}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Category;
