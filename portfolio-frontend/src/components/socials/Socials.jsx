import "./socials.css";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const Socials = () => {
  return (
    <div className="pf__Socials-main">
      <hr className="pf__Hr-line"></hr>

      <div className="pf__Socials-container">
        <div>
          <SiLinkedin color="#fff" size={34} />
        </div>
        <div>
          <SiGithub color="#fff" size={34} />
        </div>
        <div>
          <SiInstagram color="#fff" size={34} />
        </div>
      </div>
    </div>
  );
};

export default Socials;
