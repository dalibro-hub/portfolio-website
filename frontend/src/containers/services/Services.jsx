import { Feature } from "../../components";
import { Footer } from "../index";
import {
  UI,
  ux,
  optimization,
  shield,
  SEO,
  Responsive,
  REST,
  agile,
} from "../about/imports";
import "./services.css";

const Services = () => {
  return (
    <div className="pf__Services-container">
      <div>
        <h2 className="pf__container-header">SERVICES</h2>
        <h3 className="pf__container-header-h3"> PROFESSIONAL SERVICES</h3>
        <div className="pf__Services-container_features">
          <Feature
            iconURL={agile}
            title={"Agile development"}
            className="pf__Feature"
            text={
              "2 years of experience in agile methodology and development. Agile emphasizes flexibility and collaboration, and it is important because of its adaptiveness to ever-changing project requirements."
            }
          />
            <Feature
              iconURL={SEO}
              title={"SEO"}
              className="pf__Feature"
              text={
                "Following the best practices in web development for highest SEO optimization, since marketing is as equally important as creative content, and SEO is here to help us increase website traffic."
              }
            />
          <Feature
            iconURL={shield}
            title={"Security"}
            className="pf__Feature"
            text={
              "Implementing security measures such as encryption, secure sockets layer (SSL) certificates, and regular security audits. This can help protect the website and its users from cyber threats and other vulnerabilities."
            }
          />
          <Feature
            iconURL={optimization}
            title={"Performance optimization"}
            className="pf__Feature"
            text={
              "It is the key for better user experience. Reducing the website's loading time, optimizing its images and other media, and implementing caching techniques, all of which helps ensure that the website is fast and responsive. "
            }
          />
          <Feature
            iconURL={ux}
            title={"UX"}
            className="pf__Feature"
            text={
              "Comprehensive understanding of user experience. What is crucial here is being able to think as a customer (website user) and to identify which content is important and which is not."
            }
          />
          <Feature
            iconURL={UI}
            title={"UI"}
            className="pf__Feature"
            text={
              "Limited experience in designing a minimalistic user interface, with the mindset that the user should be able to navigate quickly and with ease through the website."
            }
          />
          <Feature
            iconURL={Responsive}
            title={"Responsive design"}
            className="pf__Feature"
            text={
              "Understanding the significance and value of scalability to both, mobile and desktop web apps given the diversity of user preferences."
            }
          />
          <Feature
            iconURL={REST}
            title={"REST"}
            className="pf__Feature"
            text={
              "Using this architectural style has benefits of allowing any web client to be able to make HTTP requests, connect to an API and consume its data."
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
