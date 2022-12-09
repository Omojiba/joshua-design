import React, { useEffect } from "react";
import about from "./about.module.css";
import { StyledContainer } from "../../styled/containers/StyledContainer";
import { Typography } from "@mui/material";
import aboutImg from "../../assets/images/aboutImg.png";
import hand from "../../assets/icons/hand.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <main className={about.main}>
      <StyledContainer>
        {/* IMAGE AND INTRODUCTION */}
        <section>
          <div className={about.first}>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className={about.imgDiv}
            >
              <img src={aboutImg} className={about.myImage} alt="image" />
            </div>

            <div
              className={about.imageText}
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              <Typography variant="h1">
                Hi <img src={hand} className={about.handIcon} alt="icon" />{" "}
              </Typography>

              <Typography className={about.aboutText} variant="textBody">
                I currently work as a Product designer at Decred inc. , a
                cryptocurrency company which develops software designed to
                integrate community-based governance in blockchain transactions.{" "}
              </Typography>

              <Typography className={about.aboutText} variant="textBody">
                I love to create fun, innovative, and accessible websites and
                applications. I enjoy learning new things and constantly seek
                out new learning opportunities.
              </Typography>

              <Typography className={about.aboutText} variant="textBody">
                My experience as a user experience designer for the past 2 years
                includes crafting of beautiful websites and mobile applications.
              </Typography>
            </div>
          </div>

          <div
            className={about.secondText}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={about.aboutText} variant="textBody">
              In addition to good visual abilities, I also possess great
              presentation skills which allow me to successfully present design
              ideas to stakeholders. My strong conceptualization ability allows
              me to picture and then bring to life beautiful work. Finally, I
              have extensive knowledge of wireframe and user flow creation. I
              know you will agree you have found your next UI/UX Designer upon
              meeting.
            </Typography>
          </div>
        </section>

        <section>
          <div className={about.objectives}>
            <Typography
              variant="h2"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Objectives
            </Typography>

            <div className={about.objectivesMain}>
              <Typography
                className={about.aboutText}
                variant="textBody"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                My life objectives include:
              </Typography>

              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    To provide the technology that can enhance commercial
                    activities in eastern part of Nigeria especially Aba.{" "}
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    To establish a tech school to help young africans develop
                    and reach up to the standard of the world as regards to
                    technological industry.
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    To become a world-known product designer/CEO that owns and
                    works with brands and organization to help make life for
                    humans on earth better and easier through design.
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className={about.interests}>
            <Typography
              variant="h2"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Interests
            </Typography>

            <div className={about.InterestsMain}>
              <Typography
                className={about.aboutText}
                variant="textBody"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                Things I love to do when I am not designing:
              </Typography>

              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    Basketball
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    Song writing
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    Eating
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={about.aboutText} variant="textBody">
                    Travelling
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </StyledContainer>
    </main>
  );
}

export default About;
