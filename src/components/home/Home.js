/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from "react";
import Banner from "../banner/Banner";
import Movies from "../movies/Movies";
import Category from "../category/Category";
import Live from "../live/Live";


const Home = () => {
    return (
        <>
            <main>
                <Banner />
                <Movies />
                <Category />
                <Live />
            </main>
        </>
    );
};

export default Home;
