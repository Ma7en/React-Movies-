import React from "react";

const Category = () => {
    return (
        <>
            <section className="category" id="category">
                <h2 className="section-heading">Category</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <img
                            src="./images/action.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Action</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/comedy.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Comedy</div>
                        <div className="total">50</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/thriller.webp"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Thriller</div>
                        <div className="total">20</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/horror.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Horror</div>
                        <div className="total">80</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/adventure.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Adventure</div>
                        <div className="total">100</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/animated.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Animated</div>
                        <div className="total">50</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/crime.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">Crime</div>
                        <div className="total">20</div>
                    </div>
                    <div className="category-card">
                        <img
                            src="./images/sci-fi.jpg"
                            alt=""
                            className="card-img"
                        />
                        <div className="name">SCI-FI</div>
                        <div className="total">80</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;
