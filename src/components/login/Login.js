import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="login">
                <h2 className="section-heading">Login</h2>

                <form className="navbar-form">
                    {/* className="navbar-form-search" */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="formInput"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className="formInput"
                        required
                    />

                    {/* className="navbar-form-close" */}
                    <button type="submit" className="formButton">
                        Login
                    </button>
                    <Link
                        to="/signup"
                        className=""
                        style={{ textAlign: "center" }}
                    >
                        SignUp
                    </Link>
                </form>
            </section>
        </>
    );
};

export default Login;
