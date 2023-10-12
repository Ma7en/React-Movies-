/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
                );
                setSearchResults(response.data.results);
            } catch (error) {
                console.error("Error searching movies:", error);
            }
        }
    };
    return (
        <>
            <div>
                <div></div>
            </div>
        </>
    );
};

export default SearchResults;
