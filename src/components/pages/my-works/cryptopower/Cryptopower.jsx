import React from "react";
import crypto from "./crypto.module.css";
import { StyledContainer } from "../../../styled/containers/StyledContainer";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imgOne from "./images/imgOne.png";
import primary from "./images/primary.png";
import secondary from "./images/secondary.png";
import sendPages from "./images/sendPages.png";
import addExchange from "./images/addExchange.png";
import staking from "./images/staking.png";
import ScrollToTop from "react-scroll-to-top";

function Cryptopower() {
  return (
    <main className={crypto.main}>
      <StyledContainer>
        <Box className={crypto.mainContainer}>
          <div className={crypto.backLink}>
            <Link to="/my-work">
              <MdOutlineArrowBackIosNew />
            </Link>
          </div>

          <Typography
            className={crypto.webApp}
            variant="textBody"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            Web App
          </Typography>

          <div
            className={crypto.projectName}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h2">Cryptopower</Typography>
          </div>

          <div
            className={crypto.firstImage}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <img src={imgOne} alt="project" />
          </div>

          {/*                    OVERVIEW                  */}
          <section
            className={crypto.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Overview</Typography>

            <div>
              <Typography
                className={crypto.regularText}
                variant="textBody"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                This is a crypto currency application that is designed for both
                desktop and mobile. It is a secure open source wallet.
              </Typography>
            </div>

            <div className={crypto.marginTop}>
              <Typography
                className={crypto.regularText}
                variant="textBody"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                The solution creates a platform that enables customers to send
                and receive DCR coin. It has a staking feature which enables
                users buy tickets. The major functiionality of niche of the
                Decred system is governance, which allows users within the
                ecosystem to vote on proposals. The wallet supports bitcoin,
                this enables users send and receive bitcoin.
              </Typography>
            </div>
          </section>

          {/*                   CHALLENGE        */}
          <section
            className={crypto.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Challenge</Typography>

            <div>
              <Typography className={crypto.regularText} variant="textBody">
                The challenge of this project is to design 2 different
                interfaces that enables sending and receiving of cryptocurrency.
              </Typography>
            </div>
          </section>

          {/*             TARGET AUDIENCE */}

          <section className={crypto.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Target Audience
            </Typography>

            <div className={crypto.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={crypto.regularText} variant="textBody">
                    Cryptocurrency Enthusiasts
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*           ROLE    */}
          <section
            className={crypto.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Role</Typography>

            <Typography className={crypto.regularText} variant="textBody">
              Lead Designer
            </Typography>
          </section>

          {/* TOOLS */}
          <section className={crypto.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Tools
            </Typography>

            <div className={crypto.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={crypto.regularText} variant="textBody">
                    Figma
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={crypto.regularText} variant="textBody">
                    Notion
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*             COLORS */}

          <section className={crypto.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Colors
            </Typography>
            <div className={crypto.colorFlex}>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                className={crypto.primary}
              >
                <Typography className={crypto.regularText} variant="textBody">
                  Primary Colors
                </Typography>
                <div>
                  <img src={primary} alt="color-palette" />
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                className={crypto.secondary}
              >
                <Typography className={crypto.regularText} variant="textBody">
                  Secondary Colors
                </Typography>
                <div>
                  <img src={secondary} alt="color-palette" />
                </div>
              </div>
            </div>
          </section>

          {/* MOCKUPS */}
          <section
            className={crypto.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">MockUps</Typography>

            <Typography className={crypto.regularText} variant="textBody">
              Below are the result of the design process
            </Typography>
          </section>

          {/* SEND PAGES */}

          <section
            className={crypto.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={crypto.textCenter} variant="h2">
              Send pages for both BTC and DCR
            </Typography>

            <div className={crypto.flexBox}>
              <img src={sendPages} alt="project" />
            </div>
          </section>

          {/* ADD EXCHANGE */}

          <section
            className={crypto.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={crypto.textCenter} variant="h2">
              Add exchange
            </Typography>

            <div className={crypto.flexBox}>
              <img src={addExchange} alt="project" />
            </div>
          </section>

          {/* STAKING */}

          <section
            className={crypto.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={crypto.textCenter} variant="h2">
              Staking
            </Typography>

            <div className={crypto.flexBox}>
              <img src={staking} alt="project" />
            </div>
          </section>

          {/* NEXT BUTTON */}

          <section className={crypto.linkBox}>
            <div className={crypto.flexBox}>
              <Link to="/my-work/fixus">
                <span className={crypto.links}>Previous Case Study</span>
              </Link>
            </div>
          </section>
          <ScrollToTop top={1000} color="#FF6B6B" smooth />
        </Box>
      </StyledContainer>
    </main>
  );
}

export default Cryptopower;
