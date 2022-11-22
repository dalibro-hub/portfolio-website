import "./socials.css";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { Logo } from "../../components";

const Socials = () => {
  return (
    <div className="pf__Socials-main">
      <Logo />
      <div className="pf__Socials-container">
        <div>
          <SiLinkedin color="#fff" size={38} />
        </div>
        <div>
          <SiGithub color="#fff" size={38} />
        </div>
        <div>
          <SiInstagram color="#fff" size={38} />
        </div>
      </div>
    </div>
  );
};

export default Socials;
