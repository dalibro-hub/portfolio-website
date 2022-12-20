import "./footer.css";
import { Socials } from "../../components";

const Footer = () => {
  const date = new Date();
  return (
    <div className="pf__Footer">
      <Socials />
      {date.getFullYear()}©
    </div>
  );
};

export default Footer;
