import React from "react";
import "./card.css";

const Card = () => {
    return (
        <section className="card">
            <div className="card_image">
                <img
                    className="card_img"
                    src="https://source.unsplash.com/WLxQvbMyfas"
                    alt="Mount Fuji"
                />
            </div>
            <div className="card_details">
                <div className="card_location">
                    <img src="" alt="" className="card_location_icon" />
                    <span className="card_location">JAPAN</span>
                    <span>
                        <a className="card_location_link" href="www.google.com">
                            View on Google Maps
                        </a>
                    </span>
                </div>
                <h1 className="card_title">Mount Fuji</h1>
                <p className="card_dates">
                    <small>
                        {" "}
                        <span>
                            <b>12 Jan,2021</b>
                        </span>{" "}
                        <b>-</b>{" "}
                        <span>
                            <b>24 Jan,2021</b>
                        </span>
                    </small>
                </p>
                <p className="card_description">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </section>
    );
};

export default Card;
