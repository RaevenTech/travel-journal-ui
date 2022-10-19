import React from "react";
import "./card.css";
import locationPin from "../../assets/location_pin.png";

const Card = (props) => {
    return (
        <>
            <section className="card">
                <div className="card_image">
                    <img
                        className="card_img"
                        src={props.imageUrl}
                        alt="Mount Fuji"
                    />
                </div>
                <div className="card_details">
                    <div className="card_location">
                        <img
                            src={locationPin}
                            alt="location"
                            className="card_location_icon"
                        />
                        <span className="card_location">{props.location}</span>
                        <span>
                            <a
                                className="card_location_link"
                                href={props.googleMapsUrl}
                            >
                                View on Google Maps
                            </a>
                        </span>
                    </div>
                    <h1 className="card_title">{props.title}</h1>
                    <p className="card_dates">
                        <small>
                            {" "}
                            <span>
                                <b>{props.startDate}</b>
                            </span>{" "}
                            <b>-</b>{" "}
                            <span>
                                <b>{props.endDate}</b>
                            </span>
                        </small>
                    </p>
                    <p className="card_description">{props.description}</p>
                </div>
            </section>
            <hr className="card_lineBreak" />
        </>
    );
};

export default Card;
