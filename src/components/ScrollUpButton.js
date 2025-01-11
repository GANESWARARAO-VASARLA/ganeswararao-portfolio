import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={scrolled ? "scrollup-container show" : "scrollup-container"}
    >
      <a href="#home" style={{ color: "#fff" }}>
        <FaAngleUp className="scrollup-button" />
      </a>
    </div>
  );
};

export default ScrollUpButton;
