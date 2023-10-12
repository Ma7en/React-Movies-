import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <section className="signup">
                <h2 className="section-heading">SignUp</h2>

                <form className="navbar-form">
                    {/* className="navbar-form-search" */}
                    <input
                        type="text"
                        name="search"
                        placeholder="Enter Your Name"
                        className="formInput"
                        required
                    />

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
                        SignUp
                    </button>
                    <Link
                        to="/login"
                        className=""
                        style={{ textAlign: "center" }}
                    >
                        Login
                    </Link>
                </form>
            </section>
        </>
    );
};

export default SignUp;
