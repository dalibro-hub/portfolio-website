import "./socials.css";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const Socials = ({ styling = "pf__Socials-container", size = 34 }) => {
  return (
    <div className={styling}>
      <a
        href="https://www.linkedin.com/in/dalibor-jaksic-57929a183/"
        className="pf__Socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin size={size} />
      </a>
      <a
        href="https://github.com/dalibro-hub"
        className="pf__Socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub size={size} />
      </a>
      <a
        href="https://www.instagram.com/j_dalibro/"
        className="pf__Socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram size={size} />
      </a>
    </div>
  );
};

export default Socials;
