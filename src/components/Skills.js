import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1200});
  }, []);

  return (
    <section className="skills" id="skills">
      <div
        className="max-width"
        style={{ color: "#fff", position: "relative", zIndex: "1" }}
      >
        <h2
          className="title"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Skills
        </h2>
        <div className="skills-box">
          <div
            className="skill-content"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="progress">
              <h3>
                HTML <span>90%</span>
              </h3>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                CSS <span>85%</span>
              </h3>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                Javascript <span>90%</span>
              </h3>
              <div className="bar">
                <span className="javascript"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                React <span>95%</span>
              </h3>
              <div className="bar">
                <span className="react"></span>
              </div>
            </div>
          </div>
          <div
            className="skill-content"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="progress">
              <h3>
                Python <span>80%</span>
              </h3>
              <div className="bar">
                <span className="python"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                Node <span>75%</span>
              </h3>
              <div className="bar">
                <span className="node"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                MongoDB <span>60%</span>
              </h3>
              <div className="bar">
                <span className="mongo"></span>
              </div>
            </div>
            <div className="progress">
              <h3>
                SQL <span>75%</span>
              </h3>
              <div className="bar">
                <span className="sql"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
