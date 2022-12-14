import "./contactComp.css";

const ContactComp = ({ image, heading, text }) => {
  return (
    <div className="pf__contactComp-container">
      <div className="pf__contactComp-image">{image}</div>
      <div className="pf__contactComp-title_text">
        <h3>{heading} </h3>
        <div className="pf__contactComp-title_text-div">{text}</div>
      </div>
    </div>
  );
};

export default ContactComp;
