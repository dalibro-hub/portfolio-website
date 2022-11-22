import "./resumeFeature.css";

function ResumeFeature ({Heading,SubHeading,Text}){
  return (
    <div className="pf__ResumeFeature-container">
        <h1>{Heading}</h1>
        <h3>{SubHeading}</h3>
        <p>{Text}</p>
    </div>
  )
}

export default ResumeFeature