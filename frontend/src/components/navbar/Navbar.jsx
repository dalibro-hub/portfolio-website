/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Logo } from "../../components";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("/");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/resume") {
      setActiveLink("resume");
    } else if (location.pathname === "/services") {
      setActiveLink("services");
    }
  }, [location]);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="Pf__Navbar-containers ">
        <div className="Pf__Navbar_containers-logo swing-in-top-fwd">
          <Logo size="45 -62 180 370" width={"30mm"} height={"30mm"} />
        </div>
        <Link
          onClick={() => handleClick("/")}
          className={
            activeLink === "/" ? "pf__Navbar-link-active" : "pf__Navbar-link "
          }
          to="/"
        >
          HOME
        </Link>
        <Link
          onClick={() => handleClick("about")}
          className={
            activeLink === "about"
              ? "pf__Navbar-link-active "
              : "pf__Navbar-link "
          }
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          onClick={() => handleClick("resume")}
          className={
            activeLink === "resume"
              ? "pf__Navbar-link-active"
              : "pf__Navbar-link"
          }
          to="/resume"
        >
          RESUME
        </Link>
        <Link
          onClick={() => handleClick("services")}
          className={
            activeLink === "services"
              ? "pf__Navbar-link-active"
              : "pf__Navbar-link"
          }
          to="/services"
        >
          SERVICES
        </Link>
      </div>
      <div className="Pf__Navbar-menu swing-in-top-fwd">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#DAA700"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="Pf__Navbar-menu-container swing-in-top-fwd">
            <div className="Pf__Navbar-menu_container-links">
              <Link
                onClick={() => handleClick("/")}
                className={
                  activeLink === "/"
                    ? "pf__Navbar-link-active"
                    : "pf__Navbar-link "
                }
                to="/"
              >
                HOME
              </Link>
              <Link
                onClick={() => handleClick("about")}
                className={
                  activeLink === "about"
                    ? "pf__Navbar-link-active "
                    : "pf__Navbar-link "
                }
                to="/about"
              >
                ABOUT
              </Link>
              <Link
                onClick={() => handleClick("resume")}
                className={
                  activeLink === "resume"
                    ? "pf__Navbar-link-active"
                    : "pf__Navbar-link"
                }
                to="/resume"
              >
                RESUME
              </Link>
              <Link
                onClick={() => handleClick("services")}
                className={
                  activeLink === "services"
                    ? "pf__Navbar-link-active"
                    : "pf__Navbar-link"
                }
                to="/services"
              >
                SERVICES
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
