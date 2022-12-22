import { Navbar } from "../../components";
import { useState } from "react";
import { GiPlainArrow } from "react-icons/gi";
import djed from "../../assets/djed.png";
import "./header.css";

function Header() {
  const [hoveringText, sethoveringText] = useState("");
  const addClass = () => {
    sethoveringText("scale-up ");
  };
  const removeClass = () => {
    sethoveringText("scale-down");
  };
  return (
    <div>
      <Navbar />
      <div className="pf__Header">
        <div className="pf__Header-container">
          <div className="pf__Header-container_heading swing-in-top-fwd">
            <h1>Dalibor Jaksic</h1>
            <h4>engineer / web developer</h4>
          </div>
          <button
            type="button"
            className="pf-button scale-up-center "
          >
            Contact
          </button>
          <div className="pf__Header-container_projects swing-in-top-fwd">
            <p onMouseEnter={addClass} onMouseLeave={removeClass}>
              view projects
            </p>
            <GiPlainArrow color="#daa700" size={32} className={hoveringText} />
          </div>
        </div>
        <img
          className="pf__Header-container_image swing-in-top-fwd"
          src={djed}
          alt="myself"
        ></img>
      </div>
    </div>
  );
}

export default Header;
