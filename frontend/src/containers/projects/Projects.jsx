import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlinePageview } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { ScrollToTop } from "../../components";
import { useEffect, useState } from "react";

import "swiper/css";
import "./projects.css";
import { EffectCoverflow } from "swiper";

const Projects = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [distance, setDistance] = useState(160);

  useEffect(() => {
    if (screenWidth < 1000) {
      setDistance(100);
      if (screenWidth < 550) {
        setDistance(20);
      }
    }

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [distance, screenWidth]);
  return (
    <div className="pf__Projects-container" id="pf__Projects">
      <h2 className="pf__container-header"> PROJECTS </h2>
      <h3 className="pf__container-header-h3"> MY WORK</h3>
      <div>
        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          spaceBetween={distance}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: -10,
          }}
          modules={[EffectCoverflow]}
        >
          <SwiperSlide className="pf_Projects-carousel smfproject ">
            <div className="pf_Projects-main_div">
              <div className="pf_Projects-overlay_div">
                <h2>SMF D.O.O. </h2>
                <p className="pf_Projects-overlay_div-content">
                  {screenWidth >= 700
                    ? "This website was created together with a colleague from  previous company. It was intended for a small company (Smart                  Move Forward) that provides services such as integration of                  modern solutions for process automation in industrial                  manufacturing. The Website was built using React.js and                  Node.js and has features such as responsive design, functional                  contact form, google map, interactive logo."
                    : ""}
                </p>
                <div className="pf_Projects-links">
                  <a
                    className="pf_Projects-button"
                    href="https://pekazeka.github.io/Smart-Move-Forward/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlinePageview size={23} />
                    LIVE DEMO
                  </a>
                  <a
                    className="pf_Projects-button"
                    href="https://github.com/PekaZeka/Smart-Move-Forward"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillCode size={23} />
                    CODE
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pf_Projects-carousel underconstruction">
            <div className="pf_Projects-main_div">
              <div className="pf_Projects-overlay_div">
                <h2>COMING SOON </h2>
                <p>STAY TUNED</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pf_Projects-carousel underconstruction">
            <div className="pf_Projects-main_div">
              <div className="pf_Projects-overlay_div">
                <h2>COMING SOON </h2>
                <p>STAY TUNED</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pf_Projects-carousel underconstruction">
            <div className="pf_Projects-main_div">
              <div className="pf_Projects-overlay_div">
                <h2>COMING SOON </h2>
                <p>STAY TUNED</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Projects;
