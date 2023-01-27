/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";
import "./scrollToTop.css";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [hoveringText, sethoveringText] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const addClass = (klasa) => {
    sethoveringText(klasa);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (showTopBtn) {
    return (
      <div className="icon-position fade-in " onClick={goToTop}>
        <GoArrowUp size={55} color={"#ffffffcc"} className={hoveringText} />
      </div>
    );
  }
}
export default ScrollToTop;
