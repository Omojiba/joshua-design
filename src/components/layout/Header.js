import React, { useState, useEffect } from "react";
import { StyledContainer } from "../styled/containers/StyledContainer";
import logo from "../assets/icons/logo.png";
import header from "./header.module.css";
import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import crown from "../assets/icons/navCrown.png";
import w from "../assets/icons/navW.png";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimCursor from "../helpers/AnimCursor";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const currentPage = location?.pathname;
  console.log(currentPage);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  function headerScrollShadow() {
    let header = document.querySelector("header");
    let scrollValue = window.scrollY;
    if (scrollValue >= 20) {
      header.style.borderBottom = "0.5px solid rgba(255,255,255,0.1)";
    } else {
      header.style.borderBottom = "none";
    }
    // console.log(scrollValue);
  }
  window.addEventListener("scroll", headerScrollShadow);

  function Hamburger() {
    return (
      <svg
        className={
          menuOpen === true
            ? `${header.ham} ${header.active} ${header.hamRotate} ${header.ham1}`
            : `${header.ham}  ${header.hamRotate} ${header.ham1}`
        }
        id={menuOpen === true ? header.lineColorActive : header.linecolor}
        viewBox="0 0 100 100"
        width="45"
        onClick={handleMenuOpen}
      >
        <path
          className={`${header.top} ${header.line}`}
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path className={`${header.middle} ${header.line}`} d="m 30,50 h 40" />
        <path
          className={`${header.bottom} ${header.line}`}
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
    );
  }

  return (
    <main className={menuOpen === true ? header.mainActive : header.main}>
      <AnimCursor />
      <header
        className={menuOpen === true ? header.headerActive : header.header}
      >
        <Link to="/" className={header.logoDiv}>
          <img src={logo} alt="logo" />

          <h3
            className={
              menuOpen === true ? header.logoTextActive : header.logoText
            }
          >
            design
          </h3>
        </Link>

        <div
          id="menu-icon"
          className={
            menuOpen === true ? header.hamburgerActive : header.hamburger
          }
        >
          <svg
            className={
              menuOpen === true
                ? `${header.ham} ${header.active} ${header.hamRotate} ${header.ham1}`
                : `${header.ham}  ${header.hamRotate} ${header.ham1}`
            }
            id={menuOpen === true ? header.lineColorActive : header.linecolor}
            viewBox="0 0 100 100"
            onClick={handleMenuOpen}
          >
            <g fill={menuOpen === true ? "#FFFFFF" : "#000000"}>
              <path
                className={`${header.top} ${header.line}`}
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path
                className={`${header.middle} ${header.line}`}
                d="m 30,50 h 40"
              />
              <path
                className={`${header.bottom} ${header.line}`}
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </g>
          </svg>
        </div>
      </header>

      <nav
        className={
          menuOpen === true ? header.nav : `${header.displayNone} ${header.nav}`
        }
      >
        <div className={header.navItems}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <Typography
              className={currentPage === "/" ? header.activeLink : ""}
              variant="navLink"
            >
              Home
            </Typography>
          </Link>
          <Link to="about-me" onClick={() => setMenuOpen(false)}>
            <Typography
              className={currentPage === "/about-me" ? header.activeLink : ""}
              variant="navLink"
            >
              About Me
            </Typography>
          </Link>
          <Link to="my-work" onClick={() => setMenuOpen(false)}>
            <Typography
              className={
                currentPage === "/my-work" ||
                currentPage === "/my-work/b54" ||
                currentPage === "/my-work/fixus" ||
                currentPage === "/my-work/cryptopower"
                  ? header.activeLink
                  : ""
              }
              variant="navLink"
            >
              My Work
            </Typography>
          </Link>
          <Link to="resume" onClick={() => setMenuOpen(false)}>
            <Typography
              className={currentPage === "/resume" ? header.activeLink : ""}
              variant="navLink"
            >
              My Resume
            </Typography>
          </Link>
          <Link to="contact-me" onClick={() => setMenuOpen(false)}>
            <Typography
              className={currentPage === "/contact-me" ? header.activeLink : ""}
              variant="navLink"
            >
              Contact Me
            </Typography>
          </Link>
          <div className={header.wIcon}>
            <img src={w} alt="" />
          </div>

          <div className={header.crown}>
            <img src={crown} alt="" />
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;
