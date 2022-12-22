import "./socials.css";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const Socials = ({ styling = "pf__Socials-container", size = 34 }) => {
  return (
    <div className="pf__Socials-main">
      <div className={styling}>
        <div>
          <SiLinkedin color="#fff" size={size} />
        </div>
        <div>
          <SiGithub color="#fff" size={size} />
        </div>
        <div>
          <SiInstagram color="#fff" size={size} />
        </div>
      </div>
    </div>
  );
};

export default Socials;
