import { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { ContactComp } from "../../components";
import { ClipLoader } from "react-spinners";
import { Socials } from "../../components";
import axios from "axios";
import "./contact.css";

function Contact() {
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
      await axios.post("http://localhost:3001", {
        name,
        phone,
        mail,
        message,
      });
      setSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
    return null;
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [submitted, error]);
  return (
    <div className="pf__contact-container">
      <h2 className="pf__container-header">CONTACT</h2>
      <h3 className="pf__container-header-h3"> GET IN TOUCH WITH ME</h3>
      <div className="pf__contact-container-separator">
        <div className="pf__contact-container-info">
          <ContactComp
            image={<MdLocationPin color="#ffeeca" size="33" />}
            heading="My location"
            text="Milosa Trebinjca 5, Pancevo 26000, Serbia"
          />
          <ContactComp
            image={<MdPhone color="#ffeeca" size="33" />}
            heading="Call me"
            text="+381-64-385-3029"
          />
          <ContactComp
            image={<IoShareSocialSharp color="#ffeeca" size="33" />}
            heading="My socials"
            text={<Socials styling="pf__Socials-contact-container" size="38" />}
          />
          <ContactComp
            image={<MdEmail color="#ffeeca" size="33" />}
            heading="My email"
            text="dalibor_jaksicrocketmail"
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
                Thank you for contacting me! <br /> I will get back to you soon.
              </p>
            ) : error ? (
              <p className="pf__Contact-message">
                {error} <br /> Please, try again.
              </p>
            ) : isLoading ? (
              <div className="pf__Contact-spinner">
                <ClipLoader size="44"/>
              </div>
            ) : (
              <button className="pf__Contact-content_form-button" type="submit">
                SEND MESSAGE <BsArrowReturnRight />
                
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
