import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Overlay from "../components/Overlay";

import BookTicket from "./components/BookTicket";
function Event() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <Overlay>
          <BookTicket setModal={setModal} />
        </Overlay>
      ) : null}

      <Navbar />
      <Banner />
      <Content setModal={setModal} />
      <Footer />
    </>
  );
}

export default Event;
