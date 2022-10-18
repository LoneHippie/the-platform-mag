import React from "react";

import * as classes from "./Footer.module.scss";

const Footer = ({ darkFooterBackground }) => {
  return (
    <footer
      className={classes.footer}
      style={{ background: darkFooterBackground ? "#2C2C2C" : "#EEEEEE" }}
    >
      <section className={classes.navigation}>
        <h2 style={{ color: darkFooterBackground ? "#FFFFFF" : "#000000" }}>
          Navigation
        </h2>
        <ul>
          <li>
            <a
              href="/"
              alt="Back to home page"
              style={{ color: darkFooterBackground ? "#EEEEEE" : "#2C2C2C" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/editions"
              alt="To view all Platform editions"
              style={{ color: darkFooterBackground ? "#EEEEEE" : "#2C2C2C" }}
            >
              Editions
            </a>
          </li>
          <li>
            <a
              href="/video-stories"
              alt="To view all Platform video stories"
              style={{ color: darkFooterBackground ? "#EEEEEE" : "#2C2C2C" }}
            >
              Videos
            </a>
          </li>
          <li>
            <a
              href="/contact"
              alt="To contact page"
              style={{ color: darkFooterBackground ? "#EEEEEE" : "#2C2C2C" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </section>

      <section
        className={classes.copyright}
        style={{ color: darkFooterBackground ? "#EEEEEE" : "#2C2C2C" }}
      >
        Platform Mag ©{new Date().getFullYear()} By IDC Global Current Designed
        by Jordan Hlebechuk
      </section>
    </footer>
  );
};

export default Footer;
