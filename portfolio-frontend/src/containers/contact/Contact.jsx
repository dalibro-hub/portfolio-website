import { useState } from "react";
import axios from "axios";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { ContactComp } from "../../components";
import {Socials} from "../../components";
import "./contact.css";

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (event) => {
    event.preventDefault();
    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    setSent(true);
    try {
      await axios.post("http://localhost:3001/send_mail", {
        name,
        mail,
        phone,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
            text={<Socials styling="pf__Socials-contact-container" size="38"/>}
          />
          <ContactComp
            image={<MdEmail color="#ffeeca" size="33" />}
            heading="My email"
            text="dalibor_jaksicrocketmail"
          />
        </div>
        <div>
          <div className="pf__contact-form">
            {!sent ? (
              <>
                <form
                  onSubmit={handleSend}
                  className="pf__contact-form_inputs"
                  autoComplete="off"
                  spellCheck="false"
                >
                  <p>Your name</p>
                  <input
                    type="name"
                    name="name"
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Your email</p>
                  <input
                    type="email"
                    name="email"
                    value={mail}
                    required={true}
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <p>Your phone</p>
                  <input
                    onKeyPress={(event) => {
                      if (!/[0-9 +/-]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <p>Message</p>
                  <textarea
                    name="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="pf__contact-form_sendBtn scale-up-center"
                  >
                    Send
                    <BsArrowReturnRight size="22" />
                  </button>
                </form>
              </>
            ) : (
              <h1 className="pf__contact-form_sent">tyMsg</h1>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
