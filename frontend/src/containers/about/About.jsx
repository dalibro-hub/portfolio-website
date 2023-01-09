import { Feature } from "../../components";
import djed from "../../assets/djed.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  confluence,
  my_vscode_icon,
  my_python_icon,
  matlab,
  my_linux_icon,
  jira,
  my_js_icon,
  my_html_icon,
  my_github_icon,
  my_react_icon,
  my_git_icon,
  my_css_icon,
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
            Despite not currently being employed in my preferred field, I am a
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
                  <b>Phone:</b> +381-64-385-3029
                </p>
              </span>
              <span>
                <MdKeyboardArrowRight color="#dac400" />
                <p>
                  <b>Email:</b> dalibor_jaksic@fakemail.com
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
            Enthusiastic about programming and computer science in general.
            Despite graduating from University of Mechanical Engineering, there
            was always inclinations towards software topics. Considering that,
            Master's degree consisted of a small electronic kit that included a
            Raspberry-Pi, which is a tiny computer with strong processing power.
            Specifically, an artificial neural network was trained to classify
            around 10 different sound commands for the purpose of moving a small
            electric motor. Responsibility, tolerability, and a friendly nature
            are also notable qualities alongside attention to detail, and
            problem-solving abilities, which are desirable in the focused
            industry.
          </p>
        </div>
      </div>

      <h2 className="pf__container-header">SKILLS </h2>
      <div className="pf__About-container_feature-skills">
        <Feature
          iconURL={my_react_icon}
          text={"React "}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_js_icon}
          text={"Javascript"}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_html_icon}
          text={"HTML "}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_css_icon}
          text={"CSS "}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_git_icon}
          text={"Git"}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_github_icon}
          text={"Github"}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_vscode_icon}
          text={"VS Code"}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_python_icon}
          text={"Python"}
          className="pf__Feature row"
        />
        <Feature
          iconURL={matlab}
          text={"Matlab "}
          className="pf__Feature row"
        />
        <Feature
          iconURL={my_linux_icon}
          text={"Linux "}
          className="pf__Feature row"
        />
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
