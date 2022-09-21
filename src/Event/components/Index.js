import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Content from "./Content";

function Event() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default Event;
