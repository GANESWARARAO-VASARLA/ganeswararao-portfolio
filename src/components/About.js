import React, { useEffect } from "react";
import Aos from "aos";
import "animate.css";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width" style={{ position: "relative", zIndex: "1" }}>
        <h2 className="title" data-aos="fade-left">
          About me
        </h2>
        <div className="about-content">
          <div className="column right">
            <div
              className="text"
              data-aos="fade-right"
            >
              I'm Ganeswararao
            </div>
            <p data-aos="fade-left">
              Hello, I’m Ganeswararao. I have 3.2 years of experience as a
              Software Developer, mainly working on front-end development with
              React.js, JavaScript and TypeScript, Html, CSS. In my last job at
              KloudWorx Technologies Pvt. Ltd., where I focused on UI design and
              developing web applications. I’ve worked on several projects such
              as HRMS, onboarding tools, and PDS Galaxy and Heritage tool. I’ve
              contributed to improving user interfaces, handling API integration
              Additionally, I use GitLab for version control and continuous
              integration. I follow the Agile methodology.
            </p>
            <a
              href="https://drive.google.com/file/d/1J6Irsc9XVvKr_RQc8E3Jd15XqTlgv2t1/view?usp=sharing"
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
