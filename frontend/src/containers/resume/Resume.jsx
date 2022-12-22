import { ResumeFeature } from "../../components";
import { Footer } from "../index";
import "./resume.css";

function Resume() {
  return (
    <div className="pf__Resume_container-main">
      <h2 className="pf__container-header">RESUME</h2>
      <h3 className="pf__container-header-h3">BRIEF RESUME INFORMATION</h3>
      <div className="pf__Resume_container">
        <div className="pf__Resume_container-features">
          <div className="pf__Resume_container-features-heading">
            <h3>Professional Experience</h3>
          </div>
          <div className="pf__Resume_container-features-wrapper">
            <ResumeFeature
              Heading={"BACHELOR OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2010 - 2014"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "uia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              }
            />
            <ResumeFeature
              Heading={"BACHELOR OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2010 - 2014"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "uia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              }
            />
            <ResumeFeature
              Heading={"MASTER OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2015 - 2016"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend"
              }
            />
          </div>
          <div className="pf__Resume_container-features-heading">
            <h3>Education </h3>
          </div>
          <div className="pf__Resume_container-features-wrapper">
            <ResumeFeature
              Heading={"BACHELOR OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2010 - 2014"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "uia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              }
            />
            <ResumeFeature
              Heading={"BACHELOR OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2010 - 2014"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "uia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              }
            />
            <ResumeFeature
              Heading={"BACHELOR OF FINE ARTS & GRAPHIC DESIGN"}
              Years={"2010 - 2014"}
              Location={"Rochester Institute of Technology, Rochester, NY"}
              Text={
                "uia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiddsds dsds   sds dsds    dsds s sdsddsds ddddddddddddddddddddes voluptatem Earum molestiae consequatur neque etlon sader mart dilaia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiddsds dsds   sds dsds    dsds s sdsddsds ddddddddddddddddddddes quis Eius vel ratione eius unde vitae rerum voluptates asperiddsds dsds   sds dsds    dsds s sdsddsds ddddddddddddddddddddes voluptatem Earum molestiae consequatur neque etlon sader mart dilaia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiddsds dsds   sds dsds    dsds s sdsddsds dddddddddddddddddddde"
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
