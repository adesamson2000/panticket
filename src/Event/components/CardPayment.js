import React from "react";
import "./CardPayment.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
function BookTicket() {
  return (
    <div className="booking-container">
      <div className="container-header">
        <p className="container-title">Make Payment</p>
        <button className="close-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#666670"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#666670"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="payment-type">
        <p>Card Payment </p>
        <p className="bank">Bank Transfer</p>
      </div>
      <div className="ticket-form-container">
        <form>
          <div className="form-input">
            <Input
              label={"Card number"}
              type="text"
              placeholder="Enter your Card Number"
            />
          </div>
          <div className="input">
            <div className="inputs">
              <Input
                label={"Expiry Date"}
                type="text"
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="inputs">
              <Input label={"CVV"} type="password" placeholder="XXX" />
            </div>
          </div>
          <div className="form-btn">
            <Button variation={"secondary"} title={"Make Payment"} />
          </div>
        </form>
        <div className="ticket-summary">
          <div className="ticket-type-group">
            <p className="type-group">
              <span>Regular Ticket</span>
              <span className="regular">(N1,000.00) </span>
            </p>
            <p className="price-group">
              <span>Qty x 2</span>
              <span>N2,000.00 </span>
            </p>
          </div>
          <div className="ticket-price-group">
            <p className="type-group">
              <span>Sub-total</span>
              <span>N1,000.00 </span>
            </p>
            <p className="price-group">
              <span>VAT7.5%</span>
              <span>N150.00 </span>
            </p>
            <p className="total-group">
              <span>Total</span>
              <span>N2,150.00 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;

function TransferDetails() {
  return (
    <div className="details section">
      <p className="details-title">Send fund to the following account</p>
      <div className="details container">
        <div className="detail-list">
          <span>Bank Name</span>
          <span>GTBANK</span>
        </div>
        <div className="detail-list">
          <span>Account Number</span>
          <span>O123 456 789</span>
        </div>
        <div className="detail-list">
          <span>Account Name</span>
          <span>Panticket Limited</span>
        </div>
        <div className="detail-list">
          <span>Payment Details</span>
          <span>Waiting</span>
        </div>
      </div>
    </div>
  );
}
