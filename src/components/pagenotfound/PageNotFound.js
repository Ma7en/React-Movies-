import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <section className="pagenotfound">
                <h2 className="section-heading" style={{ textAlign: "center" }}>
                    Page Not Found 404
                </h2>
                <Link to="/" className="formButton" style={{ textAlign: "center" }}>
                    Go Back
                </Link>
            </section>
        </>
    );
};

export default PageNotFound;
