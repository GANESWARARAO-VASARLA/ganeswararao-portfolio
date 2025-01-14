import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const { fullname, email, subject, message } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullname && email && subject && message) {
      emailjs
        .sendForm("service_qvp5vkc", "template_jt4rq86", form.current, {
          publicKey: "6zbKXqUcSS07I6alO",
        })
        .then(
          () => {
            setUserData({
              fullname: "",
              email: "",
              subject: "",
              message: "",
            });
            alert("Sent data successfully");
          },
          (error) => {
            alert("Please try again later");
          }
        );
    } else {
      alert("Please fill the all feilds");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section className="contact" id="contact">
      <div
        className="max-width"
        style={{ color: "#fff", position: "relative", zIndex: "1" }}
      >
        <h2 className="title" style={{ color: "#fff" }} data-aos="fade-left">
          Contact me
        </h2>
        <div className="contact-container">
          <div
            className="details-container1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <strong className="text">Get in touch</strong>
            <div className="user-container">
              <FaUser className="user-icon" />
              <div className="name-container">
                <h4>Name</h4>
                <p>Ganeswararo Vasarla</p>
              </div>
            </div>
            <div className="user-container">
              <FaEnvelope className="user-icon" />
              <div className="name-container">
                <h4>Email</h4>
                <a style={{ color: "#fff" }} href="mailto:example@example.com">
                  ganeswararao.vasarla.44@gmail.com
                </a>
              </div>
            </div>
            <div className="user-container">
              <FaLinkedin className="user-icon" />
              <div className="name-container">
                <h4>Linkedin Profile</h4>
                <a
                  style={{ color: "#fff" }}
                  href="https://www.linkedin.com/in/ganeswararaovasarla/"
                >
                  GANESWARARAO VASARLA
                </a>
              </div>
            </div>
            <div className="user-container">
              <FaGithubSquare className="user-icon" />
              <div className="name-container">
                <h4>Github Profile</h4>
                <a
                  style={{ color: "#fff" }}
                  href="https://github.com/GANESWARARAO-VASARLA"
                >
                  GANESWARARAO-VASARLA
                </a>
              </div>
            </div>
          </div>
          <div
            className="details-container2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <strong className="text">Message me</strong>
            <form
              className="form-container"
              style={{ paddingTop: "10px" }}
              ref={form}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                value={userData.fullname}
                onChange={(e) =>
                  setUserData({ ...userData, fullname: e.target.value })
                }
                className="fullname"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="email"
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({ ...userData, subject: e.target.value })
                }
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message..."
                className="message-area"
                value={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
