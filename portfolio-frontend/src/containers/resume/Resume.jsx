import { ResumeFeature } from "../../components";
import "./resume.css";

function Resume() {
  return (
    <div className="pf__Resume-container">
      <h1 className="pf__Resume-h1"> MY RESUME </h1>
      <h4 className="pf__Resume-h4"> YEARS OF EXPERIENCE </h4>
      <div className="pf__Resume-features">
        <div className="pf__Resume-heading1">
          <h3>Job Experience</h3>
          <h4>2010-2014</h4>
        </div>
        <ResumeFeature
          Heading={"BROSSSSSE"}
          SubHeading={"SubHeading"}
          Text={"BlaBla"}
        />
        <ResumeFeature
          Heading={"BROSSSSSE"}
          SubHeading={"SubHeading"}
          Text={"BlaBla"}
        />
        <ResumeFeature
          Heading={"BROSSSSSE"}
          SubHeading={"SubHeading"}
          Text={"BlaBla"}
        />
        <div className="pf__Resume-heading2">
          <h3>Education Quality</h3>
          <h4>2013-123123</h4>
        </div>
        <ResumeFeature
          Heading={"MASINSKI"}
          SubHeading={"SubHeading"}
          Text={"Automatika"}
        />
        <ResumeFeature
          Heading={"MASINSKI"}
          SubHeading={"SubHeading"}
          Text={"Automatika"}
        />
        <ResumeFeature
          Heading={"MASINSKI"}
          SubHeading={"SubHeading"}
          Text={"Automatika"}
        />
      </div>
    </div>
  );
}

export default Resume;
