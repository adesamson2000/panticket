import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <svg
          width="146"
          height="24"
          viewBox="0 0 146 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.1439 16.16V12.768H13.6159C14.7466 12.768 15.6426 12.4693 16.3039 11.872C16.9652 11.2533 17.2959 10.4 17.2959 9.312C17.2959 8.18133 16.9652 7.31733 16.3039 6.72C15.6426 6.12267 14.7466 5.824 13.6159 5.824H4.6559V22.88H0.399902V2.176H13.2319C14.3839 2.176 15.4612 2.31467 16.4639 2.592C17.4879 2.86933 18.3732 3.296 19.1199 3.872C19.8879 4.448 20.4852 5.184 20.9119 6.08C21.3386 6.976 21.5519 8.05333 21.5519 9.312C21.5519 10.5493 21.3386 11.6053 20.9119 12.48C20.4852 13.3547 19.8879 14.0693 19.1199 14.624C18.3732 15.1573 17.4879 15.552 16.4639 15.808C15.4612 16.0427 14.3839 16.16 13.2319 16.16H4.1439Z"
            fill="#94248C"
          />
          <path
            d="M32.3864 23.232C30.8077 23.232 29.3677 22.8907 28.0664 22.208C26.7864 21.504 25.7624 20.5333 24.9944 19.296C24.2477 18.0373 23.8744 16.5867 23.8744 14.944C23.8744 13.2587 24.2584 11.7973 25.0264 10.56C25.7944 9.32267 26.8291 8.36267 28.1304 7.68C29.4531 6.976 30.9464 6.624 32.6104 6.624C34.4451 6.624 35.9171 6.99733 37.0264 7.744C38.1571 8.46933 38.9784 9.46133 39.4904 10.72C40.0024 11.9787 40.2584 13.3867 40.2584 14.944C40.2584 15.8827 40.1091 16.8427 39.8104 17.824C39.5117 18.784 39.0531 19.68 38.4344 20.512C37.8157 21.3227 37.0051 21.984 36.0024 22.496C34.9997 22.9867 33.7944 23.232 32.3864 23.232ZM33.7304 20.032C34.9891 20.032 36.0771 19.8187 36.9944 19.392C37.9117 18.9653 38.6157 18.368 39.1064 17.6C39.5971 16.832 39.8424 15.9467 39.8424 14.944C39.8424 13.856 39.5864 12.9387 39.0744 12.192C38.5837 11.424 37.8797 10.848 36.9624 10.464C36.0664 10.0587 34.9891 9.856 33.7304 9.856C31.9597 9.856 30.5837 10.3253 29.6024 11.264C28.6211 12.1813 28.1304 13.408 28.1304 14.944C28.1304 15.968 28.3651 16.864 28.8344 17.632C29.3037 18.3787 29.9544 18.9653 30.7864 19.392C31.6397 19.8187 32.6211 20.032 33.7304 20.032ZM39.8424 6.976H44.0024V22.88H40.1304C40.1304 22.88 40.0984 22.6773 40.0344 22.272C39.9917 21.8453 39.9491 21.312 39.9064 20.672C39.8637 20.032 39.8424 19.4027 39.8424 18.784V6.976Z"
            fill="#94248C"
          />
          <path
            d="M47.9274 6.976H52.0874V22.88H47.9274V6.976ZM59.4794 6.624C60.4607 6.624 61.3674 6.752 62.1994 7.008C63.0314 7.264 63.7567 7.65867 64.3754 8.192C64.9941 8.72533 65.4741 9.408 65.8154 10.24C66.1567 11.0507 66.3274 12.0213 66.3274 13.152V22.88H62.1674V13.888C62.1674 12.544 61.8367 11.5627 61.1754 10.944C60.5354 10.304 59.4794 9.984 58.0074 9.984C56.8981 9.984 55.8954 10.1973 54.9994 10.624C54.1034 11.0507 53.3781 11.5947 52.8234 12.256C52.2687 12.896 51.9487 13.568 51.8634 14.272L51.8314 12.64C51.9381 11.8933 52.1834 11.168 52.5674 10.464C52.9514 9.76 53.4634 9.12 54.1034 8.544C54.7647 7.94667 55.5434 7.47733 56.4394 7.136C57.3354 6.79467 58.3487 6.624 59.4794 6.624Z"
            fill="#94248C"
          />
          <path
            d="M69.1549 6.976H81.5069V10.208H69.1549V6.976ZM73.2509 2.624H77.4109V22.88H73.2509V2.624Z"
            fill="#94248C"
          />
          <path
            d="M89.0779 0V3.648H84.2459V0H89.0779ZM84.5659 6.976H88.7259V22.88H84.5659V6.976Z"
            fill="#94248C"
          />
          <path
            d="M93.3204 0.576H97.4804V22.88H93.3204V0.576ZM110.888 6.976L101.416 15.328L101.512 12.768L111.624 22.88H106.344L97.5764 13.952L105.224 6.976H110.888Z"
            fill="#94248C"
          />
          <path
            d="M127.563 17.6H131.595C131.425 18.688 130.966 19.6587 130.219 20.512C129.494 21.3653 128.502 22.0373 127.243 22.528C125.985 23.0187 124.449 23.264 122.635 23.264C120.609 23.264 118.817 22.944 117.259 22.304C115.702 21.6427 114.486 20.6933 113.611 19.456C112.737 18.2187 112.299 16.7253 112.299 14.976C112.299 13.2267 112.726 11.7333 113.579 10.496C114.433 9.23733 115.617 8.27733 117.131 7.616C118.667 6.95467 120.459 6.624 122.507 6.624C124.598 6.624 126.337 6.95467 127.723 7.616C129.11 8.27733 130.134 9.28 130.795 10.624C131.478 11.9467 131.766 13.6427 131.659 15.712H116.491C116.598 16.5227 116.897 17.2587 117.387 17.92C117.899 18.5813 118.582 19.104 119.435 19.488C120.31 19.872 121.345 20.064 122.539 20.064C123.862 20.064 124.961 19.84 125.835 19.392C126.731 18.9227 127.307 18.3253 127.563 17.6ZM122.315 9.792C120.779 9.792 119.531 10.1333 118.571 10.816C117.611 11.4773 116.993 12.2987 116.715 13.28H127.531C127.425 12.2133 126.913 11.3707 125.995 10.752C125.099 10.112 123.873 9.792 122.315 9.792Z"
            fill="#94248C"
          />
          <path
            d="M133.576 6.976H145.928V10.208H133.576V6.976ZM137.672 2.624H141.832V22.88H137.672V2.624Z"
            fill="#94248C"
          />
        </svg>
      </div>
      <button className="cta-container">Confirm Password</button>
    </nav>
  );
}

export default Navbar;
