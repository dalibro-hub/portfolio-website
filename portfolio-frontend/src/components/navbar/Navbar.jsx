/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Logo } from "../../components";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={inView ? "smf__Navbar fade-in-fast" : "smf__Navbar"}
    >
      <div className="smf__Navbar-containers">
        <div className="smf__Navbar_containers-logo">
          <Logo />
        </div>
        <p className="scale-up-center">
          <a href="#HOME"> HOME </a>
        </p>
        <p className="scale-up-center">
          <a href="#ABOUT">ABOUT</a>
        </p>
        <p className="scale-up-center">
          <a href="#CONTACT">CONTACT</a>
        </p>
      </div>
      <div className="smf__Navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="smf__Navbar-menu-container fade-in-fast">
            <div className="smf__Navbar-menu_container-links">
              <p className="scale-up-center">
                <a href="#HOME"> HOME </a>
              </p>
              <p className="scale-up-center">
                <a href="#ABOUT">ABOUT</a>
              </p>
              <p className="scale-up-center">
                <a href="#CONTACT">CONTACT</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
