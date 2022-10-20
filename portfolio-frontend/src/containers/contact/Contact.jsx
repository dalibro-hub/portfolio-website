import {useState } from "react";
import axios from "axios";
import paperPlane from "../../assets/paperPlane.png";
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
    <div className="pf__contact-form">
      {!sent ? (
        <>
          <h2>Contact With Me</h2>
          <form
            onSubmit={handleSend}
            className="pf__contact-form_inputs"
            autoComplete="off"
            spellCheck="false"
          >
            <input
              type="name"
              name="name"
              placeholder="popuReactDomp__name"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="popup__email"
              value={mail}
              required={true}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              onKeyPress={(event) => {
                if (!/[0-9 +/-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              type="tel"
              name="phone"
              placeholder="popup__phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder="popup__message"
              name="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onSubmit={keepOpen}
              type="submit"
              className="pf__contact-form_sendBtn scale-up-center"
            >
              <img
                src={paperPlane}
                className="pf__contact-form_paperPlane"
                alt="paperPlane"
              />
              Send
            </button>
          </form>
        </>
      ) : (
        <h1 className="pf__contact-form_sent">popup__tyMsg</h1>
      )}
    </div>
  );
}

export default Contact;
