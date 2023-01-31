import { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { ContactComp } from "../../components";
import { ClipLoader } from "react-spinners";
import ReactDom from "react-dom";
import { Socials } from "../../components";
import axios from "axios";
import "./contact.css";

function Contact({ open, onClose, keepOpen }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("http://jdalibor.co:3010", {
        name,
        phone,
        mail,
        message,
      });
      setTimeout(() => {
        setSubmitted(true);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setError(error.message);
      }, 1700);
    }
    return null;
  };
  useEffect(() => {
    const timeout = sent
      ? setTimeout(() => {
          onClose();
          setSent(false);
        }, 3000)
      : keepOpen;
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab") {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      clearTimeout(timeout);
    };
  }, [onClose, keepOpen, sent]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [submitted, error]);
  if (open) {
    document.body.classList.add("active-Popup");
  } else {
    document.body.classList.remove("active-Popup");
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className="pf__popup-overlay" />
      <div className="pf__contact-container">
        <h2 className="pf__container-header">CONTACT</h2>
        <h3 className="pf__container-header-h3"> GET IN TOUCH WITH ME</h3>
        <div>
          <div className="pf__contact-container-info">
            <ContactComp
              image={<MdLocationPin color="#ffeeca" size="33" />}
              heading="My location"
              text={
                <address className="pf__Contact-content_info-txt">
                  Street Name, Pancevo 26000, Serbia
                </address>
              }
            />
            <ContactComp
              image={<MdPhone color="#ffeeca" size="33" />}
              heading="Call me"
              text={
                <a
                  className="pf__Contact-content_info-txt"
                  href="tel: +381643853029"
                >
                  +381-64-385-3029
                </a>
              }
            />
            <ContactComp
              image={<IoShareSocialSharp color="#ffeeca" size="33" />}
              heading="My socials"
              text={
                <Socials styling="pf__Socials-contact-container" size="32" />
              }
            />
            <ContactComp
              image={<MdEmail color="#ffeeca" size="33" />}
              heading="My email"
              text={
                <a
                  className="pf__Contact-content_info-txt"
                  href="mailto: dalibor.jaksic@fakemail.com"
                >
                  dalibor.jaksic@fakemail.com
                </a>
              }
            />
          </div>
          <div className="pf__contact-form">
            <form
              className="pf__Contact-content_form"
              onSubmit={handleSubmit}
              autoComplete="off"
              spellCheck="false"
            >
              <h1 className="pf__Contact-content_form-title">CONTACT FORM</h1>
              <div className="pf__Contact-content_form-container">
                <label
                  className="pf__Contact-content_form-container_label"
                  htmlFor="name"
                >
                  Your name
                  <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label
                  className="pf__Contact-content_form-container_label"
                  htmlFor="phone"
                >
                  Your phone
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="^[0-9+/ -]+$"
                    required
                  />
                </label>
                <label
                  className="pf__Contact-content_form-container_label"
                  htmlFor="mail"
                >
                  Your e-mail
                  <input
                    type="email"
                    name="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                  />
                </label>
                <label
                  className="pf__Contact-content_form-container_label"
                  htmlFor="message"
                >
                  Message
                  <input
                    name="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>
              </div>
              {submitted ? (
                <p className="pf__Contact-message">
                  Thank you for contacting me! <br />
                </p>
              ) : error ? (
                <p className="pf__Contact-message">
                  {error} <br /> Please, try again.
                </p>
              ) : isLoading ? (
                <div className="pf__Contact-spinner">
                  <ClipLoader size="44" color="#ffeeca" />
                </div>
              ) : (
                <button
                  className="pf__Contact-content_form-button"
                  type="submit"
                >
                  <BsArrowReturnRight size="16" />
                  SEND MESSAGE
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Contact;
