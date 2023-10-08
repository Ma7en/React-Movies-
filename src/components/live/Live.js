import React from "react";

const Live = () => {
    return (
        <>
            <section className="live" id="live">
                <h2 className="section-heading">Live Tv Shows</h2>
                <div className="live-grid">
                    <div className="live-card">
                        <div className="card-head">
                            <img
                                src="./images/planet.jpg"
                                alt=""
                                className="card-img"
                            />
                            <div className="live-badge">LIVE</div>
                            <div className="total-viewers">305K viewers</div>
                            <div className="play">
                                <ion-icon name="play-circle-outline" />
                            </div>
                        </div>
                        <div className="card-body">
                            <img
                                src="./images/bbcamerica.jpg"
                                alt=""
                                className="avatar"
                            />
                            <h3 className="card-title">
                                Planet Earth II <br />
                                Season 1 - Islands
                            </h3>
                        </div>
                    </div>
                    <div className="live-card">
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Live;
