/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
// import "./App.css";
import "./css/main.css";
import "./css/variable.css";
import "./css/reset.css";
import "./css/media_query.css";
import Header from "./components/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Movies from "./components/movies/Movies";
import Category from "./components/category/Category";
import Live from "./components/live/Live";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import JoinUs from "./components/Joinus/JoinUs";
import SignUp from "./components/signup/SignUp";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
    return (
        <div className="App container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
