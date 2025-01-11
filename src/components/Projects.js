import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import nextwatch from "../images/nextwatch.png";
import movies from "../images/movies.png";
import wikipedia from "../images/wikipedia.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1200});
  });

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title" data-aos="zoom-out-right">
          Projects
        </h2>
        <Swiper
          breakpoints={{
            386: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
        >
          <SwiperSlide>
            <div
              className="project-container"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={nextwatch} alt="nextwatch" className="project-img" />
              <div className="project-layer">
                <h2>Nxt Watch Platform</h2>
                <p>
                  Developed a YouTube-inspired application, "Nxt Watch," with a
                  responsive UI, robust user authentication, secure navigation,
                  and diverse video categories.
                </p>
                {/* <a
                  href="https://prasanthyt.ccbp.tech/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="project-container"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={movies} alt="nextwatch" className="project-img" />
              <div className="project-layer">
                <h2>Movies App</h2>
                <p>
                  Designed and developed a robust OTT platform for movie
                  enthusiasts, navigation, dynamic scrolling, appealing UI
                  design, TMDb API integration, and secure user authentication.
                </p>
                {/* <a
                  href="https://prasanthmovies.ccbp.tech/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="project-container"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={wikipedia} alt="nextwatch" className="project-img" />
              <div className="project-layer">
                <h2>Wikipedia Search Application</h2>
                <p>
                  Developed a custom Wikipedia search application with detailed
                  explanations, styled using CSS and Bootstrap, and enabling
                  opening selected websites in new tabs.
                </p>
                {/* <a
                  href="https://prasanthwikipe.ccbp.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
