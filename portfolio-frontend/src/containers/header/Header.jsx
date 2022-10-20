import "./header.css";
import { GiPlainArrow } from "react-icons/gi";
import djed from "../../assets/djed.png";

function Header() {
  return (
    <div className="pf__Header">
      <div className="pf__Header-container">
        <div className="pf__Header-container_heading">
          <h1>Dalibor Jaksic</h1>
          <h4>engineer / web developer</h4>
        </div>
        <button type="button" className="pf-button scale-up-center">
          Contact
        </button>
        <div className="pf__Header-container_projects">
          <p>view projects</p>
          <GiPlainArrow color="#daa700" size={22} />
        </div>
      </div>
      <img className="pf__Header-container_image" src={djed} alt="myself"></img>
    </div>
  );
}

export default Header;
