import React from "react";
import "./TicketCategory.css";
import Button from "../../components/Button";
function TicketCategory({ name, price, availableTicket, colour, setModal }) {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-type">
        <div className={`${colour}-color ticket-color`}></div>
        <div className="ticket-type-title">{name} </div>
      </div>
      <p className="ticket-price">{price} </p>
      <div className="quantity-container">
        <p className="quantity">Quantity</p>
        <div className="quantity-counter">
          <p className="available-ticket">{availableTicket} </p>
          <p className="ticket-input"></p>
        </div>
      </div>
      <div className="button">
        <Button
          onClick={() => setModal((prevState) => !prevState)}
          title={"Get Ticket"}
          variation="secondary"
        />
      </div>
    </div>
  );
}

export default TicketCategory;
