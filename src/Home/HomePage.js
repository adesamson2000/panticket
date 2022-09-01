import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <header className="home-header">
        <div className="header-text">
          <p className="text-content">Connect and get ticket to </p>
          <p className="text-content">events near u based on your</p>
          <p className="text-content">interest</p>
        </div>
      </header>
      <section className="event-section">
        <form className="search-form">
          <div className="form-input">
            <Input placeholder="Search Event" />
          </div>
          <div className="form-input">
            <Input placeholder="Categories" />
          </div>
          <div className="form-btn">
            <Button title="Search Event" variation={"secondary"}></Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default HomePage;
