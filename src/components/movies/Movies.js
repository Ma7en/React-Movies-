import React from "react";

const Movies = () => {
    return (
        <>
            <section className="movies">
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
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/red-notice.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>6.4</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Red Notice</h3>
                            <div className="card-info">
                                <span className="genre">Action/Comedy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/spider-men.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>7.4</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">
                                Spider-Man: Homecoming
                            </h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2017</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/matrix.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>N/A</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">
                                The Matrix Resurrections
                            </h3>
                            <div className="card-info">
                                <span className="genre">Sci-fi/Action</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/eternals.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>6.8</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Eternals</h3>
                            <div className="card-info">
                                <span className="genre">Adventure/Action</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/dune.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.2</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Dune</h3>
                            <div className="card-info">
                                <span className="genre">Sci-fi/Adventure</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/1917.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.3</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">1917</h3>
                            <div className="card-info">
                                <span className="genre">War/Drama</span>
                                <span className="year">2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/shang-chi.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>7.6</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">
                                Shang-Chi and The Legend of The Ten Rings
                            </h3>
                            <div className="card-info">
                                <span className="genre">Action/Fantasy</span>
                                <span className="year">2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/casino-royale.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.0</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Casino Royale</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2006</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/dark-knight.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>9.0</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">The Dark Knight</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2008</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/panther.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>7.3</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Black Panther</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2018</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/venom.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>6.7</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Venom</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2018</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/LOTR.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.9</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">
                                Lord Of The Rings: Return Of The King
                            </h3>
                            <div className="card-info">
                                <span className="genre">Fantasy/Adventure</span>
                                <span className="year">2003</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/saving-private-ryan.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.6</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Saving Private Ryan</h3>
                            <div className="card-info">
                                <span className="genre">War/Action</span>
                                <span className="year">1998</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/interstaller.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.6</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Interstellar</h3>
                            <div className="card-info">
                                <span className="genre">Sci-fi/Adventure</span>
                                <span className="year">2014</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/gladiator.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.5</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Gladiator</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2000</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/endgame.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>8.4</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Avengers: Endgame</h3>
                            <div className="card-info">
                                <span className="genre">Action/Sci-fi</span>
                                <span className="year">2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/ww84.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>5.4</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Wonder Woman 1984</h3>
                            <div className="card-info">
                                <span className="genre">Action/Adventure</span>
                                <span className="year">2020</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-card">
                        <div className="card-head">
                            <img
                                src="./images/movies/captain-marvel.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="bookmark">
                                    <ion-icon name="bookmark-outline" />
                                </div>
                                <div className="rating">
                                    <ion-icon name="star-outline" />
                                    <span>6.8</span>
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Captain Marvel</h3>
                            <div className="card-info">
                                <span className="genre">Action/Sci-fi</span>
                                <span className="year">2019</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="load-more">LOAD MORE</button>
            </section>
        </>
    );
};

export default Movies;
