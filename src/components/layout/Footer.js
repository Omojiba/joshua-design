import React from "react";

import footer from "./footer.module.css";
import logo from "../assets/icons/logo.png";
import basketball from "../assets/icons/basketball.png";
import linkedin from "../assets/icons/linkedin.png";
import behance from "../assets/icons/behance.png";

function Footer() {
  return (
    <footer>
      <div className={footer.logoDiv}>
        <img src={logo} alt="logo" />

        <h3 className={footer.logoText}>design</h3>
      </div>

      <div className={footer.footerIcons}>
        <a
          href="https://dribbble.com/Joshuaikenna9"
          target="_blank"
          rel="noreferrer"
        >
          <img src={basketball} alt="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ikenna-chike-obi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="icon" />
        </a>
        <a
          href="https://www.behance.net/Ikennachikeobi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
