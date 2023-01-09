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
          <h5 className="pf__ResumeFeature-container-line-div-h5">{Location}</h5>
        </i>
        <div className="pf__ResumeFeature-container-line-div2">{Text}</div>
      </div>
    </div>
  );
}

export default ResumeFeature;
