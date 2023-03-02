import { Navbar } from "../../components";
import { Contact, Projects } from "../../containers";
import { useState, useEffect } from "react";
import { GiPlainArrow } from "react-icons/gi";
import img from "../../assets/pic4w.webp"
import "./header.css";

function Header() {
  const [hoveringText, sethoveringText] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const addClass = (klasa) => {
    sethoveringText(klasa);
  };
  const handleClick = () => {
    const element = document.getElementById("pf__Projects");
    element.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (!timeoutId) {
        addClass("bounce-in-top ");
        const id = setTimeout(() => {
          addClass("");
          setTimeoutId(null);
        }, 1500);
        setTimeoutId(id);
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      <div className="pf__Header-main">
      <img src={img} className="pf__background-image" alt="background" />
        <Navbar />
        <div className="pf__Header">
          <div className="pf__Header-container">
            <div className="pf__Header-container_heading swing-in-top-fwd">
              <h1>Dalibor Jaksic</h1>
              <h4>engineer / web developer</h4>
            </div>
            <button
              type="button"
              className="pf-button scale-up-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </button>
            <div
              className="pf__Header-container_viewprojects swing-in-top-fwd"
              onClick={handleClick}
            >
              <GiPlainArrow
                color="#daa700"
                size={34}
                className={hoveringText}
              />
              <p
                onMouseEnter={() => addClass("scale-up")}
                onMouseLeave={() => addClass("scale-down")}
              >
                view projects
              </p>
            </div>
            <Contact
              open={isOpen}
              onClose={() => setIsOpen(false)}
              keepOpen={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}

export default Header;
