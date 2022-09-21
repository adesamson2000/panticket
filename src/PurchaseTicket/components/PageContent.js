import React from "react";
import "./PageContent.css";
import PurchaseSummary from "./PurchaseSummary";
import Button from "../../components/Button";
import EventInfo from "./../../Event/components/EventInfo";
import OrganizerDescription from "./../../components/OrganizerDescription";
import TicketDetails from "../../ConfirmTicket/components/TicketDetails";

function PageContent() {
  return (
    <div className="page-content-container">
      <TicketDetails />
      <PurchaseSummary titleState={true} />
      <div className="ticket-action-btn">
        <div>
          <Button variation={"secondary"} title="Download Ticket" />
        </div>
        <div>
          <Button variation={"primary"} title="Share Event" />
        </div>
      </div>
      <EventInfo
        eventDescription={`The play, "Pelumi," is a musical love story that revolves around Pelumi, a woman who was in a relationship with Adigun, a man with direction and purpose, but felt pressured by her mother to find love with someone else because of her mother's wealth and availability. You won’t want to miss this show on this year valentine.`}
      />
      <OrganizerDescription />
    </div>
  );
}

export default PageContent;
