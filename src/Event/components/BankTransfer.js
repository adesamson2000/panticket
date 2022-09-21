import React from "react";
import "./BankTransfer.css";

import Button from "./../../components/Button";
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
        <p className="bank">Card Payment </p>
        <p>Bank Transfer</p>
      </div>
      <div className="container-ticket">
        <div className="ticket-details-container">
          <p className="details-header">Send fund to the following account</p>
          <div className="bank-details">
            <p>Bank Name</p>
            <p>GT Bank</p>
          </div>

          <div className="bank-details">
            <p>Account Number</p>
            <p>0123 4567 89</p>
          </div>

          <div className="bank-details">
            <p>Account Name</p>
            <p>Panticket Limited</p>
          </div>

          <div className="bank-details">
            <p>Payment Status </p>
            <p>Waiting</p>
          </div>
          <div className="form-btn">
            <Button variation={"secondary"} title={"Confirm Payment"} />
          </div>
        </div>

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
