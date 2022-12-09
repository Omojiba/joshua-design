import React, { useEffect } from "react";
import b from "./b54.module.css";
import { StyledContainer } from "../../../styled/containers/StyledContainer";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imgOne from "./images/imgOne.png";
import primary from "./images/primary.png";
import secondary from "./images/secondary.png";
import birdsEye from "./images/birdsEye.png";
import investorPortal from "./images/investorPortal.png";
import customerPortal from "./images/customerPortal.png";
import website from "./images/website.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

function B54() {
  return (
    <main className={b.main}>
      <StyledContainer>
        <Box className={b.mainContainer}>
          <div className={b.backLink}>
            <Link to="/my-work">
              <MdOutlineArrowBackIosNew />
            </Link>
          </div>

          <Typography
            className={b.webApp}
            variant="textBody"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            Web App
          </Typography>

          <div
            className={b.projectName}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h2">
              B54 - A Product that provides flexible finance for your business.
            </Typography>
          </div>

          <div
            className={b.firstImage}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <img src={imgOne} alt="project" />
          </div>

          {/*                    OVERVIEW                  */}
          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Overview
            </Typography>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine">
              <Typography className={b.regularText} variant="textBody">
                B54 is a B2B fin-tech in the African lending space. It is a
                digital lending platform that targets marketplaces, aggregators
                and digital lenders.
              </Typography>
            </div>

            <div
              className={b.marginTop}
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <Typography className={b.regularText} variant="textBody">
                The solution creates a platform that enables customers to
                request for loans with no collateral. It enables them disburse
                funds to their clients and also view transaction detail, loan
                tenure details, credit summary, etc. The other platforms include
                the capital partner and the bird’s eye platform. The capital
                partner platform enables investors track their portfolio to
                determine if they are in profit or loss. The Bird’s eye platform
                is the Admin’s platform that enables them make have an overall
                view of everything that goes on in the platform as a whole.
              </Typography>
            </div>
          </section>

          {/*                   CHALLENGE        */}
          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Challenge
            </Typography>

            <div data-aos="fade-up" data-aos-easing="ease-in-sine">
              <Typography className={b.regularText} variant="textBody">
                The challenge of this project is to design 3 different
                interfaces that enables digital lending to customers, enable
                investors track their portfolio and have an overall admin view.
              </Typography>
            </div>
          </section>

          {/*             TARGET AUDIENCE */}

          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Target Audience
            </Typography>

            <div className={b.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={b.regularText} variant="textBody">
                    Market aggregators
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={b.regularText} variant="textBody">
                    Digital lenders
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={b.regularText} variant="textBody">
                    Marketplaces
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*           ROLE    */}
          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Role
            </Typography>

            <Typography
              className={b.regularText}
              variant="textBody"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Lead Designer
            </Typography>
          </section>

          {/* TOOLS */}
          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Tools
            </Typography>

            <div className={b.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={b.regularText} variant="textBody">
                    Figma
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={b.regularText} variant="textBody">
                    Notion
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*             COLORS */}

          <section className={b.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Colors
            </Typography>
            <div className={b.colorFlex}>
              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={b.regularText} variant="textBody">
                  Primary Colors
                </Typography>
                <div>
                  <img src={primary} alt="color-palette" />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={b.regularText} variant="textBody">
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
            className={b.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">MockUps</Typography>

            <Typography className={b.regularText} variant="textBody">
              Below are the result of the design process
            </Typography>
          </section>

          {/* BIRD'S EYE*/}

          <section
            className={b.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={b.miniText}>Bird's Eye</Typography>

            <div className={b.flexBox}>
              <img src={birdsEye} alt="project" />
            </div>
          </section>

          {/* INVESTOR PORTAL*/}

          <section
            className={b.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={b.miniText}>Investor Portal</Typography>

            <div className={b.flexBox}>
              <img src={investorPortal} alt="project" />
            </div>
          </section>

          {/* CUSTOMER PORTAL*/}

          <section
            className={b.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={b.miniText}>Customer Portal</Typography>

            <div className={b.flexBox}>
              <img src={customerPortal} alt="project" />
            </div>
          </section>

          {/* WEBSITE*/}

          <section
            className={b.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={b.miniText}>Website</Typography>

            <div className={b.flexBox}>
              <img src={website} alt="project" />
            </div>
          </section>

          {/* NEXT BUTTON */}

          <section
            className={b.linkBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <div className={b.flexBox}>
              <Link to="/my-work/fixus">
                <span className={b.links}>Next Case Study</span>
              </Link>
            </div>
          </section>
          <ScrollToTop top={1000} color="#FF6B6B" smooth />
        </Box>
      </StyledContainer>
    </main>
  );
}

export default B54;
