import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./projects.css";

const Projects = () => {
  return (
    <div className="pf__Projects-container">
      <h2 className="pf__container-header"> PROJECTS </h2>
      <h3 className="pf__container-header-h3"> MY WORK</h3>

      <div className="pf__Projects-container-carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
