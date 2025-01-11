import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./portfolio.css";

const PortfolioNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div
        className="max-width"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <a href="#home">
            <span className="span-p">P</span>ortfolio.
          </a>
        </div>
        <ul
          className={`navbar-all-devices ${sidebar === true ? "active" : ""}`}
        >
          <li>
            <a
              href="#home"
              className={scrolled ? "hover-element" : ""}
              onClick={handleSideBar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={scrolled ? "hover-element" : ""}
              onClick={handleSideBar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={scrolled ? "hover-element" : ""}
              onClick={handleSideBar}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={scrolled ? "hover-element" : ""}
              onClick={handleSideBar}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={scrolled ? "hover-element" : ""}
              onClick={handleSideBar}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="icon">
          {sidebar ? (
            <ImCross
              className="hamburger"
              onClick={handleSideBar}
              style={{ width: "15px" }}
            />
          ) : (
            <GiHamburgerMenu className="hamburger" onClick={handleSideBar} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
