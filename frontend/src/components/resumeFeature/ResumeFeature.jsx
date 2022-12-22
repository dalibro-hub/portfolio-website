import "./resumeFeature.css";

function ResumeFeature({ Heading, Years, Location, Text }) {
  return (
    <div className="pf__ResumeFeature-container">
      <h4>{Heading}</h4>
      <div className="pf__ResumeFeature-container-line">
        <div className="pf__ResumeFeature-container-line-div">
          <p> {Years}</p>
        </div>
        <i>
          <h5>{Location}</h5>
        </i>
        <p className="pf__ResumeFeature-container-line-p">{Text}</p>
      </div>
    </div>
  );
}

export default ResumeFeature;
