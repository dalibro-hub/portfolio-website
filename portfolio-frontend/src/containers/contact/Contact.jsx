import { useState } from "react";
import axios from "axios";
import "./contact.css";
import { BsArrowReturnRight, BsCheck2Square } from "react-icons/bs";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";

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
      <h2>GET IN TOUCH</h2>
      <div className="pf__contact-container-separator">
        <div className="pf__contact-container-info">
          <div>
            <MdLocationPin />
            <p>Milosa Trebinjca 5, 26000 Pancevo</p>
          </div>
          <div>
            <MdPhone />
            <p>+381643853ZeroTwoEight</p>
          </div>
          <div>
            <MdEmail />
            <p>dalibor_jaksic@rocketmail.com</p>
          </div>
          <div>
            <BsCheck2Square />
            <p>Freelance Available</p>
          </div>
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
