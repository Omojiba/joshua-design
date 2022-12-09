import React from "react";
import fixus from "./fixus.module.css";
import { StyledContainer } from "../../../styled/containers/StyledContainer";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imgOne from "./images/imgOne.png";
import imgTwo from "./images/imgTwo.png";
import imgThree from "./images/imgThree.png";
import imgFour from "./images/imgFour.png";
import imgFive from "./images/imgFive.png";
import userFlow from "./images/userFlow.png";
import lowFi from "./images/lowFi.png";
import styleGuide from "./images/styleGuide.png";
import before from "./images/before.png";
import after from "./images/after.png";
import afterForm from "./images/afterForm.png";
import primary from "./images/primary.png";
import secondary from "./images/secondary.png";
import homeScreens from "./images/homeScreens.png";
import regScreens from "./images/regScreens.png";
import otherScreens from "./images/otherScreens.png";
import ScrollToTop from "react-scroll-to-top";
import LoadingSpinner from "../../../helpers/LoadingSpinner";

function Fixus() {
  return (
    <main className={fixus.main}>
      <StyledContainer>
        <Box className={fixus.mainContainer}>
          <div className={fixus.backLink}>
            <Link to="/my-work">
              <MdOutlineArrowBackIosNew />
            </Link>
          </div>

          <Typography
            className={fixus.webApp}
            variant="textBody"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            Web App
          </Typography>

          <div
            className={fixus.projectName}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h2">Fixus</Typography>
          </div>

          <div
            className={fixus.firstImage}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            {imgOne ? <img src={imgOne} alt="project" /> : <LoadingSpinner />}
          </div>

          {/*                    OVERVIEW                  */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Overview</Typography>

            <div>
              <Typography className={fixus.regularText} variant="textBody">
                FIxus is an online repair store. Late May 2022, A company called
                Fixus reached out to me concerning the state of their website.
                Fixus is an online phone, laptop and tablet repair service in
                Lagos. Its mission is to meet device needs one fix at a time
                while providing comfort.{" "}
              </Typography>
            </div>
          </section>

          {/*                   CHALLENGE        */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Challenge</Typography>

            <div>
              <Typography className={fixus.regularText} variant="textBody">
                The current website didn’t have a great user interface with a
                lot of call to action buttons that mean the same thing. Any user
                using the site would be confused at which button to click or
                what exactly to do on the website. The process of ordering a
                repair seems to be quite long with multiple forms making the
                user journey long. Nobody likes long queues, they change a
                person’s mood, disorient users and make carrying out a simple
                task complex.
              </Typography>
            </div>
          </section>

          {/* CTAs */}

          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Multiple call to Action buttons on the home screen.
            </Typography>

            <div className={fixus.flexBox}>
              <img src={imgTwo} alt="project" />
            </div>
          </section>

          {/*                  MULTIPLE FORMS                 */}

          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Multiple forms required to place an order.
            </Typography>

            <div className={fixus.flexBox}>
              <img src={imgThree} alt="project" />
            </div>
          </section>

          {/* UNDERSTANDING THE USERS */}

          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Understanding the Users
            </Typography>

            <Typography
              className={fixus.regularText}
              variant="textBody"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              User interview was conducted with 3 different individuals. Below
              are the takeaways and pain points of the users.
            </Typography>

            <div className={fixus.bulletBox}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    The user interface was not appealing and off the bat you
                    couldn’t easily tell what the website was for
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    The users did not like the multiple call to actions on the
                    page and didn’t know exactly which one to click
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    The users didn’t like the long process it took before
                    placing a repair order.
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    Users didn’t understand the process of how the online repair
                    service worked.
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/* USER PERSONA */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">User Persona</Typography>

            <div className={fixus.flexBox}>
              <img src={imgFour} alt="project" />
            </div>
          </section>

          {/* USER JOURNEY MAP */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">User Journey Map</Typography>

            <div className={fixus.flexBox}>
              <img src={imgFive} alt="project" />
            </div>
          </section>

          {/* IDEATION STEPS */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">
              Ideation Steps ( The Solution )
            </Typography>

            <Typography className={fixus.regularText} variant="textBody">
              During this stage we identified the various features /
              requirements needed for the project.
            </Typography>
          </section>

          {/* USER FLOW */}

          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">User Flow</Typography>

            <Typography className={fixus.regularText} variant="textBody">
              After identifying the different features we came up with a user
              flow for the website.
            </Typography>

            <div className={fixus.userFlow}>
              <img src={userFlow} alt="project" />
            </div>
          </section>

          {/* LOW - FI */}

          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Low-fidelity Wireframes</Typography>

            <div className={fixus.flexBox}>
              <img src={lowFi} className={fixus.imgShrink} alt="project" />
            </div>
          </section>

          {/* STYLE GUIDE */}
          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Style Guide</Typography>

            <div className={fixus.flexBox}>
              <img src={styleGuide} className={fixus.imgShrink} alt="project" />
            </div>
          </section>

          {/* UNDERSTANDING THE USERS */}

          <section
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Understanding the Users</Typography>

            <Typography className={fixus.regularText} variant="textBody">
              As stated earlier, one of the problems the website was that the
              home page was clustered with different call to actions, the user
              interface design wasn’t the best and it was confusing for users to
              understand how the service worked. Below is the comparison of what
              the website looked like and what we came up with.
            </Typography>
          </section>

          {/* REASONS FOR DESIGN (HOME-PAGE) */}
          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Reasons for the design of the home page
            </Typography>

            <div className={fixus.bulletBox}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    I decided to have a picture on the hero section showing the
                    action of repair, this would enable users quickly have an
                    idea of what they should expect from the website. I also
                    came up small cards to indicate the quality of work and how
                    fast it would take to repair a device once an order has been
                    placed.
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    Also one of the problems users had was understanding how the
                    service works, so I came up a 4 step guide to explain how
                    services are rendered.
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    The “why choose us” section was to give the user a sense of
                    trust in the company. I believe users would want to feel
                    comfortable with whoever they would want to give their
                    devices to.
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*                         BEFORE & AFTER          */}

          <section className={fixus.contentBox}>
            <div className={fixus.flexContainer}>
              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={fixus.textCenter} variant="h2">
                  Before
                </Typography>
                <div>
                  <img src={before} alt="project" />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={fixus.textCenter} variant="h2">
                  After
                </Typography>
                <div>
                  <img src={after} alt="project" />
                </div>
              </div>
            </div>
          </section>

          {/*                      ORDERING A REPAIR             */}
          <section className={`${fixus.contentBox} ${fixus.topMargin}`}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Ordering a repair
            </Typography>

            <Typography
              className={fixus.regularText}
              variant="textBody"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              The previous steps involved in ordering a repair was long with
              many forms and there was a break in flow for the users to sign up
              before placing an order.
            </Typography>
          </section>

          {/*           REASONS FOR THE DESIGN              */}
          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Reasons for the design
            </Typography>

            <div className={fixus.bulletBox}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    One problem the users complained about was the time it took
                    to place an order. Most users would easily drop off from the
                    site because of this. So I decided come up with a single
                    page form that would enable users quickly place an order.
                    This is a much simpler and faster way for a user to place an
                    order.
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*          BEFORE      */}
          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Before
            </Typography>

            <div className={fixus.flexBox}>
              <img src={imgThree} alt="project" />
            </div>
          </section>

          {/*                    AFTER              */}
          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              After
            </Typography>

            <div className={fixus.flexBox}>
              <img src={afterForm} width="90%" alt="project" />
            </div>
          </section>

          {/*             TARGET AUDIENCE */}

          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Target Audience
            </Typography>

            <div className={fixus.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    University students
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    Content creators
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*           ROLE    */}
          <section
            className={`${fixus.contentBox} ${fixus.topMargin}`}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Role</Typography>

            <Typography className={fixus.regularText} variant="textBody">
              Lead Designer
            </Typography>
          </section>

          {/* TOOLS */}
          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Tools
            </Typography>

            <div className={fixus.bulletBoxGrey}>
              <ul>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    Figma
                  </Typography>
                </li>
                <li data-aos="fade-left" data-aos-easing="ease-in-sine">
                  <Typography className={fixus.regularText} variant="textBody">
                    Notion
                  </Typography>
                </li>
              </ul>
            </div>
          </section>

          {/*             COLORS */}

          <section className={fixus.contentBox}>
            <Typography
              variant="h1"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Colors
            </Typography>
            <div className={fixus.colorFlex}>
              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={fixus.regularText} variant="textBody">
                  Primary Colors
                </Typography>
                <div>
                  <img src={primary} alt="color-palette" />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-easing="ease-in-sine">
                <Typography className={fixus.regularText} variant="textBody">
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
            className={fixus.contentBox}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">MockUps</Typography>

            <Typography className={fixus.regularText} variant="textBody">
              Below are the result of the design process
            </Typography>
          </section>

          {/* HOME SCREENS */}

          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Home Screens
            </Typography>

            <div className={fixus.flexBox}>
              <img src={homeScreens} alt="project" />
            </div>
          </section>

          {/* REGISTRATION SCREENS */}
          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Registration Screens
            </Typography>

            <div className={fixus.flexBox}>
              <img src={regScreens} alt="project" />
            </div>
          </section>

          {/* OTHER SCREENS */}

          <section
            className={fixus.mockups}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography className={fixus.textCenter} variant="h2">
              Other Screens
            </Typography>

            <div className={fixus.flexBox}>
              <img src={otherScreens} alt="project" />
            </div>
          </section>

          {/* PREV/NEXT BUTTONS */}

          <section className={fixus.linkBox}>
            <div className={fixus.linkFlex}>
              <Link to="/my-work/b54">
                <span className={fixus.links}>Previous Case Study</span>
              </Link>

              <Link to="/my-work/cryptopower">
                <span className={fixus.links}>Next Case Study</span>
              </Link>
            </div>
          </section>

          <ScrollToTop top={1000} color="#FF6B6B" smooth />
        </Box>
      </StyledContainer>
    </main>
  );
}

export default Fixus;
