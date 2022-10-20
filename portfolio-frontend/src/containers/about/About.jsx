import { Feature } from "../../components";
import {
  UI,
  // UX,
  // Responsive,
  // Agile,
  // SEO,
  // RESTfull,
  // Communication,
  // Analytics
} from "./imports";
import "./about.css";

const About = () => {
  return (
    <div className="pf__About-container">
      <h1 className="pf__About-container_header"> ABOUT </h1>
      <h2> WHAT I DO </h2>
      <p className="pf__About-container_paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rem
        ullam? Laudantium dolor veniam libero. Assumenda, deleniti incidunt
        tempora odit architecto sequi deserunt voluptates asperiores ratione
        suscipit, magnam ex dicta, nobis dolor voluptatum optio? Eligendi omnis
        sit illum iusto reiciendis eum assumenda, quas architecto officia atque
        quibusdam consequatur aut, minima fugit? Laborum, reprehenderit
        explicabo? Amet est aperiam veritatis quae nemo.
      </p>
      <div className="pf__About-container_features">
        <Feature iconURL={UI} title={"UI"} />
        <Feature iconURL={UI} title={"UX"} />
        <Feature iconURL={UI} title={"Responsive design"} />
        <Feature iconURL={UI} title={"Agile development"} />
        <Feature iconURL={UI} title={"SEO"} />
        <Feature iconURL={UI} title={"REST-full"} />
        <Feature iconURL={UI} title={"Communication"} />
        <Feature iconURL={UI} title={"Analytics"} />
      </div>
    </div>
  );
};

export default About;
