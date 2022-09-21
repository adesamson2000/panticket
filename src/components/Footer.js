import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-logo">
          <img src="/images/footer-logo.svg" alt="footer-logo" />
        </div>
        <div className="right-flex">
          <div id="phone-container" className="flex-container">
            <img src="/images/phone.png" alt="phone" />
            <span>+234 812 345 6789</span>
          </div>

          <div id="email-container" className="flex-container">
            <img src="/images/email.png" alt="email" />
            <a href="mailto:hello@pantiket.ng">hello@pantiket.ng</a>
          </div>

          <div id="icon-container" className="flex-container">
            <img src="/images/linkedin.png" alt="linkedin" />
            <img src="/images/whatsapp.png" alt="whatsapp" />
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/instagram.png" alt="instagram" />
            <img src="/images/twitter.png" alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-caption">
        <small>2019 &copy; All rights reserved by BoyePanthera.com</small>
        <small>Design with ❤️ by BlaqMac Design</small>
      </div>
    </footer>
  );
}

export default Footer;
