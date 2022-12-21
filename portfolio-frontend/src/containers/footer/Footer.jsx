import "./footer.css";
import { Socials } from "../../components";

const Footer = () => {
  const date = new Date();
  return (
    <div className="pf__Footer">
      <hr className="pf__Hr-line"></hr>
      <Socials />
      {date.getFullYear()}©
    </div>
  );
};

export default Footer;
