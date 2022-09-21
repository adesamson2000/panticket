import React from "react";
import ReactToPdf from "react-to-pdf";
import "./PageContent.css";
import PurchaseSummary from "./PurchaseSummary";
import Button from "../../components/Button";
import EventInfo from "./../../Event/components/EventInfo";
import OrganizerDescription from "./../../components/OrganizerDescription";
import TicketDetails from "./TicketDetails";

function PageContent() {
  const ref = React.createRef();
  const btnref = React.createRef();

  function handlePdfComplete() {
    ref.current.width = "100%";
    btnref.current.style.display = "flex";
  }

  return (
    <div ref={ref} className="page-content-container">
      <TicketDetails />
      <PurchaseSummary titleState={false} />
      <div className="ticket-action-btn" ref={btnref}>
        <ReactToPdf
          targetRef={ref}
          onComplete={handlePdfComplete}
          filename="receipt.pdf"
        >
          {({ toPdf }) => (
            <div>
              <Button
                onClick={() => {
                  ref.current.style.width = "800px";
                  btnref.current.style.display = "none";
                  toPdf();
                }}
                variation={"secondary"}
                title="Download ticket"
              />
            </div>
          )}
        </ReactToPdf>
        {/* <div>
          <Button variation={"secondary"} title="Download Ticket" />
        </div> */}
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
