import React, { useEffect } from "react";
import { StyledContainer } from "../../styled/containers/StyledContainer";
import home from "./home.module.css";
import triangle from "../../assets/icons/triangle.png";
import crown from "../../assets/icons/crown.png";
import homeW from "../../assets/icons/homeW.png";
import bitmoji from "../../assets/images/bitmoji.png";
import userResearch from "../../assets/icons/userResearch.png";
import designStrategy from "../../assets/icons/designStrategy.png";
import wireFrame from "../../assets/icons/wireFrame.png";
import b54 from "../../assets/images/b54.png";
import fixus from "../../assets/images/fixus.png";
import adobe from "../../assets/icons/adobe.png";
import miro from "../../assets/icons/miro.png";
import photoshop from "../../assets/icons/photoshop.png";
import figma from "../../assets/icons/figma.png";
import notion from "../../assets/icons/notion.png";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <main className={home.main}>
      <StyledContainer>
        <section className={home.sectionOne}>
          <div
            className={home.vectorDiv}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            <div className={home.triangle}>
              <img src={triangle} alt="" />
            </div>
            <div className={home.homeW}>
              <img src={homeW} alt="" />
            </div>
          </div>

          <div
            className={home.intro}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            <h2>Hello I'm</h2>
            <div className={home.nameDiv}>
              <img src={crown} alt="" />
              <Typography variant="h1" className={home.name}>
                <span>Jos</span>hua
              </Typography>
            </div>
            <div className={home.textBox}>
              <Typography className={home.introText} variant="textBody">
                I’m a UI/UX Designer on a mission to solve problems people have
                while using digital products. <br /> I take delight in designing
                product experiences that are seamless, joyful and help users
                achieve their goals.
              </Typography>
            </div>

            <div>
              <Link to="contact-me">Hire Me</Link>
            </div>
          </div>

          <img
            src={bitmoji}
            className={home.bitmoji}
            alt="myAvatar"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          />
        </section>

        <section className={home.sectionOneMobile}>
          <img src={homeW} className={home.mobileW} alt />
          <img src={triangle} className={home.mobileTriangle} alt="" />
          <div className={home.avatarFlex}>
            <div
              className={home.intro}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              <h2>Hello I'm</h2>
              <div className={home.nameDiv}>
                <img src={crown} alt="" />
                <Typography variant="h1" className={home.name}>
                  <span>Jos</span>hua
                </Typography>
              </div>
            </div>
            {/* <div className={home.avatarDivMobile}>
              <img
                src={bitmoji}
                // className={home.bitmoji}
                alt="myAvatar"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
              />
            </div> */}
          </div>
          <div className={home.textBoxMobile}>
            <Typography className={home.introText} variant="textBody">
              I’m a UI/UX Designer on a mission to solve problems people have
              while using digital products. <br /> I take delight in designing
              product experiences that are seamless, joyful and help users
              achieve their goals.
            </Typography>
          </div>
          <div>
            <Link to="contact-me">Hire Me</Link>
          </div>

          <div className={home.avatarDivMobile}>
            <img
              src={bitmoji}
              // className={home.bitmoji}
              alt="myAvatar"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </section>

        {/*                     SECOND SECTION             */}
        <section className={home.sectionTwo}>
          <Typography
            variant="h1"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            What I do in a Nutshell
          </Typography>
          <Typography
            className={home.maya}
            variant="textBody"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            “You can't use up creativity. The more you use, the more you have.”
            —<span>Maya Angelou.</span>
          </Typography>
        </section>

        {/*                          THIRD SECTION                          */}
        <section className={home.sectionThree}>
          <div
            className={home.categories}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <img src={userResearch} alt="icon" />

            <Typography variant="h1">User Research</Typography>
            <Typography className={home.categoryText} variant="textBody">
              Through the use of a suitable user research method, I understand
              how users go about performing tasks and achieving goals.
            </Typography>
          </div>

          <div
            className={home.categories}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <img src={designStrategy} alt="icon" />

            <Typography variant="h1">Design Strategy</Typography>
            <Typography className={home.categoryText} variant="textBody">
              I iteratively seek to redefine problems in an attempt to identify
              better alternative strategies and solutions that might not be
              instantly apparent.
            </Typography>
          </div>

          <div
            className={home.categories}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <img src={wireFrame} alt="icon" />

            <Typography variant="h1">WireFraming & Prototyping</Typography>

            <Typography className={home.categoryText} variant="textBody">
              I ensure useful and usable user interfaces that work across
              multiple devices is an important part of the work we do on today’s
              web.
            </Typography>
          </div>
        </section>

        {/*          FOURTH SECTION          */}

        <section
          className={home.sectionFour}
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <Typography variant="h1">My Work</Typography>
          <Typography className={home.steve} variant="textBody">
            "Design is not just what it looks like and feels like. Design is how
            it works." ―<span>Steve Jobs.</span>
          </Typography>
        </section>

        <section className={home.works}>
          <Link to="my-work/b54">
            <img
              src={b54}
              alt="project"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            />
          </Link>

          <Link to="my-work/fixus">
            <img
              src={fixus}
              alt="project"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            />
          </Link>

          <Link to="my-work">
            <Typography className={home.allWork} variant="customLink">
              See All
            </Typography>
          </Link>
        </section>

        {/* TOOLS I USE */}
        <section className={home.lastSection}>
          <div
            className={home.lastLeft}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Here are the Tools I Use</Typography>
            <Typography className={home.lastText} variant="textBody">
              Remember, the ability to come up with a good design lies not only
              in the creativity of a designer but also in being skilled in using
              the tools available to him and knowing when to use them.
            </Typography>
          </div>

          <div
            className={home.lastRight}
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <div className={home.tools}>
              <div className={home.firstTools}>
                <div className={home.tooldiv}>
                  <img src={adobe} alt="adobe_icon" />
                  <Typography variant="customLink">Adobe XD</Typography>
                </div>

                <div className={home.tooldiv}>
                  <img src={miro} alt="miro_icon" />
                  <Typography variant="customLink">Miro</Typography>
                </div>
              </div>

              <div className={home.firstTools}>
                <div className={home.tooldiv}>
                  <img src={photoshop} alt="photoshop_icon" />
                  <Typography variant="customLink">Photoshop</Typography>
                </div>

                <div className={home.tooldiv}>
                  <img src={figma} alt="figma_icon" />
                  <Typography variant="customLink">Figma</Typography>
                </div>
              </div>
            </div>
            <div className={home.tooldiv}>
              <img src={notion} alt="notion_icon" />
              <Typography variant="customLink">Notion</Typography>
            </div>
          </div>
        </section>
      </StyledContainer>
    </main>
  );
}

export default Home;
