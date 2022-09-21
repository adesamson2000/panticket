import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
// import Input from "../components/Input";
import "./HomePage.css";
import Card from "../components/Card";
import Bigcard from "../components/Bigcard";
import Footer from "../components/Footer";
import Input from "../components/Input";
function HomePage() {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    async function getEvents() {
      const { data } = await axios.get(
        "https://panticket-server.herokuapp.com/event"
      );
      setAllEvents(data.events);
      console.log(data.events);
    }
    getEvents();
  }, []);

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
          <p className="section-title">Events near you</p>
          <div className="events">
            {allEvents.map((singleEvent) => {
              return (
                <Card
                  name={singleEvent.name}
                  image={singleEvent.image}
                  location={singleEvent.location}
                  price="N2000"
                  date={singleEvent.time}
                />
              );
            })}
            <Card
              name="The Concert"
              image={"/images/image-1.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-2.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-3.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-4.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-5.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-6.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-7.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-8.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
            <Card
              name="The Concert"
              image={"/images/image-9.png"}
              location="Lagos"
              price="N2000"
              date="10/10/2022"
            />
          </div>
        </div>
        <div className="event-container">
          <p className="section-title">Featured Events</p>
          <div className="featured-section">
            <Bigcard
              name="The Concert"
              image={"/images/featured-image-1.png"}
              location="Lagos"
              price="N200,000"
              discount=" Get 20% off"
            />
            <Bigcard
              name="The Concert"
              image={"/images/featured-image-2.png"}
              location="Lagos"
              price="N200,000"
              discount="Get 20% off"
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
