import React from "react";
import "./SearchResult.css";
function SearchResult({
  Title,
  Date,
  image,
  Venueaddress,
  Amountofattendees,
  Organizer,
  Price,
}) {
  return (
    <div>
      <div className="searchresult-container">
        <img src={`${image}`} alt="event" />
        <div className="search-details">
          <div className="search-title">
            <p className="title">{Title} </p>
            <p className="price">{Price} </p>
          </div>
          <p className="date">{Date} </p>
          <p className="venueaddress">{Venueaddress} </p>
          <div className="search-title">
            <p className="amountofattendees">{Amountofattendees} </p>
            <p className=" organizer">{Organizer} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
