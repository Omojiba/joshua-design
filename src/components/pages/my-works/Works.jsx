import React, { useEffect } from "react";
import works from "./works.module.css";
import { StyledContainer } from "../../styled/containers/StyledContainer";
import { Typography } from "@mui/material";
import b54 from "../../assets/images/b54.png";
import fixus from "../../assets/images/fixus.png";
import cryptopower from "../../assets/images/cryptopower.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Works() {
  return (
    <main className={works.main}>
      <StyledContainer>
        <section className={works.mainContainer}>
          <Typography
            variant="h1"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            My Work
          </Typography>

          <div
            className={works.imageBox}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <Link to="b54">
              <img src={b54} alt="work" />
            </Link>
          </div>

          <div
            className={works.imageBox}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <Link to="fixus">
              <img src={fixus} alt="work" />
            </Link>
          </div>

          <div
            className={works.imageBox}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <Link to="cryptopower">
              <img src={cryptopower} alt="work" />
            </Link>
          </div>

          <div
            className={works.contactMe}
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h2">
              You have a Project? Lets discuss it!
            </Typography>

            <Link to="/contact-me">Contact me</Link>
          </div>
        </section>
      </StyledContainer>
    </main>
  );
}

export default Works;
