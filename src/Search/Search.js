import React from "react";
import "./Search.css";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import SearchResult from "../components/SearchResult";
import Bigcard from "../components/Bigcard";
import Footer from "../components/Footer";
function Search() {
  return (
    <div>
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
          <div className="search-input">
            <Input placeholder="Search Event" />
          </div>
          <div className="category-input">
            <Input placeholder="Categories" />
          </div>
          <div className="form-btn">
            <Button title="Search Event" variation={"secondary"}></Button>
          </div>
        </form>
        <div className="event-container">
          <p className="section-title">Search Result</p>
          <div className="events"></div>
          <SearchResult
            Title="Title"
            image={"/images/image-1.png"}
            Price="Price"
            Date="Date"
            Venueaddress="Venue address"
            Amountofattendees="# of attendees"
            Organizer="Organizer"
          />
          <SearchResult
            Title="Title"
            image={"/images/image-4.png"}
            Price="Price"
            Date="Date"
            Venueaddress="Venue address"
            Amountofattendees="# of attendees"
            Organizer="Organizer"
          />
          <SearchResult
            Title="Title"
            image={"/images/image-4.png"}
            Price="Price"
            Date="Date"
            Venueaddress="Venue address"
            Amountofattendees="# of attendees"
            Organizer="Organizer"
          />
        </div>
        <div className="event-container">
          <p className="section-title">Featured Events</p>
          <div className="featured-section">
            <Bigcard
              name="The Concert"
              image={"/images/featured-image-1.png"}
              location="Lagos"
              price="N200,000"
              discount="20% off"
            />
            <Bigcard
              name="The Concert"
              image={"/images/featured-image-2.png"}
              location="Lagos"
              price="N200,000"
              discount="20% off"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
