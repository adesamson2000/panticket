import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ image, location, price, date, name }) {
  return (
    <>
      <div className="card-container">
        <img src={`${image}`} alt="event" />
        <div className="card-details">
          <Link to={"/event/1"}>
            <p className="name">{name} </p>
          </Link>

          <p className="date">{date} </p>
          <p className="location">{location} </p>
          <p className="price">{price} </p>
        </div>
      </div>
    </>
  );
}

export default Card;
