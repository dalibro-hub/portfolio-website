import { Feature } from "../../components";
import djed from "../../assets/djed.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  UI,
  // UX,
  // Responsive,
  // Agile,
  // SEO,
  // RESTfull,
  // Communication,
  // Analytics
} from "./imports";
import "./about.css";

const About = () => {
  return (
    <div className="pf__About-container_main">
      <h2 className="pf__About-container_header"> ABOUT </h2>
      <h1> LEARN MORE ABOUT ME </h1>
      <div className="pf__About-container_side">
        <img
          className="pf__About-container_image"
          src={djed}
          alt="myself"
        ></img>
        <div className="pf__About-container_side-text">
          <h2> Striving web developer </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="pf__About-container_side-info">
            <div className="pf__About-container_side-info_inline">
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Birthday: 1 May 1995</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Age: 30</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Website: www.example.com</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Degree: Master</p>
              </span>
            </div>
            <div className="pf__About-container_side-info_inline">
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Phone: +123 456 7890</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>PhEmailone: email@example.com</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>City: New York, USA</p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>Freelance: Available</p>
              </span>
            </div>
          </div>
          <p className="pf__About-container_paragraph">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
      <div className="pf__About-container_features">
        <Feature iconURL={UI} title={"UI"} />
        <Feature iconURL={UI} title={"UX"} />
        <Feature iconURL={UI} title={"Responsive design"} />
        <Feature iconURL={UI} title={"Agile development"} />
        <Feature iconURL={UI} title={"SEO"} />
        <Feature iconURL={UI} title={"REST-full"} />
        <Feature iconURL={UI} title={"Communication"} />
        <Feature iconURL={UI} title={"Analytics"} />
      </div>
    </div>
  );
};

export default About;
