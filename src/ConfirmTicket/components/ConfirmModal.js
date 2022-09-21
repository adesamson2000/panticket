import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./confirm-modal.css";
import Input from "./../../components/Input";
import Button from "./../../components/Button";

function ConfirmModal({ setModal }) {

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <>
      <div className="confirm-ticket-container">
        <div className="container-header">
          <p className="container-title">Confirm Ticket</p>
          <button
            onClick={() => setModal((prevState) => !prevState)}
            className="close-icon"
          >
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
        <div className="ticket-form-container">
          <form onSubmit={handleSubmit} className="confirm-ticket-form">
            <div className="confirm-form-input">
              <Input
                label={"Phone"}
                type="text"
                placeholder="Enter your Number"
              />
            </div>
            <div className="recaptcha-container">
              <ReCAPTCHA sitekey="6LcHGQMiAAAAADGkG-qAJsaCUzbTqL-VUBjCdV_h" />
            </div>
            <div className="confirm-form-btn">
              <Button variation={"secondary"} title={"Verify Ticket"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal;
