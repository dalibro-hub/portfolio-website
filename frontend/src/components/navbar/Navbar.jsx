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
      <div className="smf__Navbar-containers ">
        <div className="smf__Navbar_containers-logo swing-in-top-fwd">
          <Logo size="45 -62 180 370" width={"30mm"} height={"30mm"} />
        </div>
        <a className=" scale-up-center" href="#HOME">
          HOME
        </a>
        <a className=" scale-up-center " href="#ABOUT">
          ABOUT
        </a>
        <a className="scale-up-center " href="#RESUME">
          RESUME
        </a>
        <a className="scale-up-center  " href="#CONTACT">
          SERVICES
        </a>
      </div>
      <div className="smf__Navbar-menu swing-in-top-fwd">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="smf__Navbar-menu-container fade-in-fast">
            <div className="smf__Navbar-menu_container-links">
              <a className="scale-up-center" href="#HOME">
                HOME
              </a>
              <a className="scale-up-center" href="#ABOUT">
                ABOUT
              </a>
              <a className="scale-up-center" href="#RESUME">
                RESUME
              </a>
              <a className="scale-up-center" href="#CONTACT">
                SERVICES
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
