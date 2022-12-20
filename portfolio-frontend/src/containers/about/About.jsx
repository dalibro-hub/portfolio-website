import { Feature } from "../../components";
import djed from "../../assets/djed.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  confluence,
  vscode,
  python,
  matlab,
  linux,
  jira,
  javascript,
  html,
  github,
  git,
  react,
  css,
} from "./imports";
import "./about.css";
import { Footer } from "../index";

const CalculateYears = () => {
  const myBirthday = new Date("1995-4-18");
  const date = new Date();
  if (
    date.getMonth() < myBirthday.getMonth() ||
    (date.getMonth() === myBirthday.getMonth() &&
      date.getDate() < myBirthday.getDate())
  )
    return `${date.getFullYear() - myBirthday.getFullYear() - 1}`;
  else return `${date.getFullYear() - myBirthday.getFullYear()}`;
};
const About = () => {
  return (
    <div className="pf__About-container_main">
      <h2 className="pf__container-header"> ABOUT </h2>
      <h3 className="pf__container-header-h3"> LEARN MORE ABOUT ME</h3>
      <div className="pf__About-container_side">
        <img
          className="pf__About-container_image"
          src={djed}
          alt="myself"
        ></img>
        <div className="pf__About-container_side-text">
          <h2> Striving web developer </h2>
          <p>
            Even though I am currently not working in a desired field, I am a
            determined individual who aims to enter the world of web
            development. Basic information about me:
          </p>
          <div className="pf__About-container_side-info">
            <div className="pf__About-container_side-info_inline">
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Birthday:</b> 18 April 1995
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Age:</b> {CalculateYears()}
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Occupation:</b> Software tester
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Degree:</b> Master
                </p>
              </span>
            </div>
            <div className="pf__About-container_side-info_inline">
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Phone:</b> +381 64 385 3090
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Email:</b> email@example.com
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>City:</b> Pancevo, Serbia
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Freelance:</b> Available
                </p>
              </span>
            </div>
          </div>
          <p className="pf__About-container_paragraph">
            I am enthusiastic about programming and computer science in general.
            Even though I graduated from University of Mechanical Engineering,
            my Master's degree included software topic combined with small
            electronic kit that included Raspberry-Pi. Specifically, I trained
            artificial neural network to classify around 10 different sound
            commands which were used to move a small electric motor. I'm also an
            individual with a pronounced responsibility, tolerability and I have
            a friendly nature.
          </p>
        </div>
      </div>

      <h2 className="pf__container-header">SKILLS </h2>
      <div className="pf__About-container_feature-skills">
        <Feature iconURL={react} text={"React "} className="pf__Feature row" />
        <Feature
          iconURL={javascript}
          text={"Javascript"}
          className="pf__Feature row"
        />
        <Feature iconURL={html} text={"HTML "} className="pf__Feature row" />
        <Feature iconURL={css} text={"CSS "} className="pf__Feature row" />
        <Feature iconURL={git} text={"Git"} className="pf__Feature row" />
        <Feature iconURL={github} text={"Github"} className="pf__Feature row" />
        <Feature
          iconURL={vscode}
          text={"VS Code"}
          className="pf__Feature row"
        />
        <Feature iconURL={python} text={"Python"} className="pf__Feature row" />
        <Feature
          iconURL={matlab}
          text={"Matlab "}
          className="pf__Feature row"
        />
        <Feature iconURL={linux} text={"Linux "} className="pf__Feature row" />
        <Feature
          iconURL={confluence}
          text={"Confluence "}
          className="pf__Feature row"
        />
        <Feature iconURL={jira} text={"Jira "} className="pf__Feature row" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
