import React, { useEffect } from "react";
import Aos from "aos";
import "animate.css";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({duration: 1200})
  },[])

  return (
    <section className="about" id="about">
      <div className="max-width" style={{ position: "relative", zIndex: "1" }}>
        <h2 className="title" data-aos="fade-left">
          About me
        </h2>
        <div className="about-content">
          <div className="column right">
            <div className="text" style={{ color: "crimson" }} data-aos="fade-right">
              I'm Ganeswararao
            </div>
            <p data-aos="fade-left">
              I'm a highly motivated and results-oriented Full Stack Developer
              with a passion for crafting user-friendly and impactful web
              applications. Leveraging my expertise in front-end technologies
              (HTML, CSS, JavaScript, React.js, React Redux, Redux Toolkit) and
              back-end frameworks (Node.js, Express.js, MongoDB, SQLite), I've
              consistently delivered high-quality solutions that exceed
              expectations. I specialize in building seamless user interfaces
              using React.js and managing state efficiently with React Redux and
              the powerful Redux Toolkit.
            </p>
            <a
              href="https://drive.google.com/file/d/1ClwVfaG0KZQBHRYic9yYLAN_DzJU3kRx/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
