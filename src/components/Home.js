import React, { useEffect } from "react";
import Typed from "typed.js";
import developer from "../images/Programming-pana.png";
import Aos from "aos";
import "animate.css";
import "./portfolio.css";

const Home = () => {
  useEffect(() => {
    var typed = new Typed(".typing", {
      strings: ["Frontend Developer",'ReactJs Developer', "Full Stack Developer", "Freelancer", "Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    Aos.init({duration: 1200})

    return () => {
      typed.destroy();
    };
  },[]);

  return (
    <section className="home" id="home">
      <div className="max-width" style={{ position: "relative" }}>
        <div className="text-1 animate__animated animate__bounceInLeft">
          Hello, My name is
        </div>
        <div className="text-2 animate__animated animate__bounceInRight">
        Ganeswararao Vasarla
        </div>
        <div className="text-3 animate__animated animate__bounceInLeft">
          And I'm a <span className="typing"></span>
        </div>
        <a
          href="#contact"
          className="hire-me animate__animated animate__flipInY"
        >
          Hire me
        </a>
        <img src={developer} alt="developer" className="developer" data-aos="zoom-in-up" lazy={developer.toString()}/>
        
      </div>
    </section>
  );
};

export default Home;
