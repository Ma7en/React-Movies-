/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HBOLogoSquare from "../../images/HBO-Logo-square.jpg";

const Live = () => {
    const apiKey = "26e787bfb38f61a94491f3e7a2356c4e";
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [error, setError] = useState(null);
    const [liveShows, setLiveShows] = useState([]);

    useEffect(() => {
        const fetchLiveTvShows = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/tv/on_the_air?api_key=26e787bfb38f61a94491f3e7a2356c4e`
                );
                // console.log(response.data);
                setLiveShows(response.data.results);
            } catch (error) {
                console.error("Error fetching TV shows:", error);
            }
        };

        fetchLiveTvShows();
    }, []);

    if (error) return <div>{error}</div>;
    if (!liveShows) return <div>Loading...</div>;

    return (
        <>
            <section className="live" id="live">
                <h2 className="section-heading">Live Tv Shows</h2>
                <div className="live-grid">
                    {liveShows.map((show) => (
                        <div className="live-card" key={show.id}>
                            <div className="card-head">
                                <img
                                    src={`${imagePath}${show.poster_path}`}
                                    alt={show.name}
                                    className="card-img"
                                />
                                <div className="live-badge">LIVE</div>
                                <div className="total-viewers">
                                    {show.vote_count}K viewers
                                </div>
                                <div className="play">
                                    <ion-icon name="play-circle-outline" />
                                </div>
                            </div>
                            <div className="card-body">
                                {/* <img
                                    src="https://asset.entpay.9c9media.ca/image-service/version/c:YTNjOWRjMTMtZDQzNi00:M2Y5ZGE2/image.png"
                                    alt=""
                                    className="HBO"
                                /> */}
                                <img
                                    src={HBOLogoSquare}
                                    // src="./../../images/HBO-Logo-square.jpg"
                                    alt={HBOLogoSquare}
                                    className="avatar HBO "
                                />
                                <h3 className="card-title">{show.name}</h3>
                            </div>
                        </div>
                    ))}

                    {/* <div className="live-card">
                        <div className="card-head">
                            <img
                                src="./images/got.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">1.7M viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline" />
                            </div>
                        </div>
                        <div className="card-body">
                            <img
                                src="./images/HBO-Logo-square.jpg"
                                alt=""
                                className="avatar"
                            />
                            <h3 className="card-title">
                                Game of Thrones <br />
                                Season 5 - Mothers Mercy
                            </h3>
                        </div>
                    </div>
                    <div className="live-card">
                        <div className="card-head">
                            <img
                                src="./images/vikins.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">468K viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline" />
                            </div>
                        </div>
                        <div className="card-body">
                            <img
                                src="./images/HBO-Logo-square.jpg"
                                alt=""
                                className="avatar"
                            />
                            <h3 className="card-title">
                                Vikings <br />
                                Season 4 - What Might Have Been
                            </h3>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Live;
