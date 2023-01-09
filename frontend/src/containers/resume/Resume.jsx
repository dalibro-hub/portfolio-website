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
              Heading={"SOFTWARE TESTER"}
              Years={"04/2022 - PRESENT"}
              Location={"Avisto, Belgrade, Serbia"}
              Text={
                <div className="pf__Resume_container-features-wrapper-Text">
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Performing agile tests for PLC(programmable logic
                      controllers) Input/Output electronics and preparing setups
                      for CI/CD autonomous and manual testing.
                    </p>
                  </div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Developing Python scripts for the purpose of verifying
                      functional requirements based on the document
                      speciﬁcation.
                    </p>
                  </div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Acquiring a thorough understanding of the application for
                      PLC as well as scripting for the testing of electronics to
                      ensure compliance with electromagnetic compatibility
                      standards.
                    </p>
                  </div>
                </div>
              }
            />
            <ResumeFeature
              Heading={"APPLICATION SOFTWARE DEVELOPER"}
              Years={"04/2021 - 04/2022"}
              Location={"Brose, Pancevo, Serbia"}
              Text={
                <div className="pf__Resume_container-features-wrapper-Text">
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Using Git version management system to finish tasks as
                      well as helping project managers and other colleagues to
                      solve issues that are software based.
                    </p>
                  </div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Making sure that the code follows programming standards
                      that are used in automotive industry and Brose company.
                    </p>
                  </div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Performing various tests in order to validate software
                      functions according to product specification.
                    </p>
                  </div>
                </div>
              }
            />
            <ResumeFeature
              Heading={"PROJECT ENGINEER"}
              Years={"11/2020 - 04/2021"}
              Location={"Metronik Inzenjering, Belgrade, Serbia"}
              Text={
                <div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Testing of signals which are a critical component of
                      building management system functionality. These signals
                      may include temperature and pressure readings from
                      temperature chambers, energy measurement data from various
                      equipment, as well as inputs from sensors and outputs from
                      actuators. Ensuring the proper operation of these signals
                      is crucial for the overall effectiveness of the building
                      management system.
                    </p>
                  </div>
                  <div className="pf__Resume_container-features-wrapper-Text-div">
                    &#8226;
                    <p>
                      Programming of PLCs, reading electrical panel diagrams as
                      well as creating them and using software like EPLAN and
                      AUTOCAD to plan and document electrical automation
                      projects.
                    </p>
                  </div>
                </div>
              }
            />
          </div>
          <div className="pf__Resume_container-features-heading">
            <h3>Education </h3>
          </div>
          <div className="pf__Resume_container-features-wrapper">
            <ResumeFeature
              Heading={"MASTER OF MECHANICAL ENGINEERING"}
              Years={"2017 - 2020"}
              Location={"Faculty of Mechanical Engineering, Belgrade, Serbia"}
              Text={
                <div className="pf__Resume_container-features-wrapper-Text-div">
                  &#8226;
                  <p>
                    Finished Master Academic Studies at the department of
                    Automation Control and graduated on master thesis that is
                    called “Classification of sound commands using artificial
                    neural networks”.
                  </p>
                </div>
              }
            />
            <ResumeFeature
              Heading={"BACHELOR OF MECHANICAL ENGINEERING"}
              Years={"2014 - 2017"}
              Location={"Faculty of Mechanical Engineering, Belgrade, Serbia"}
              Text={
                <div className="pf__Resume_container-features-wrapper-Text-div">
                  &#8226;
                  <p>
                    Attended Undergraduate Academic Studies and acquired the
                    title of Bachelor of Science (B.Sc.) in mechanical
                    engineering.
                  </p>
                </div>
              }
            />
            <div className="pf__Resume_container-features-heading2">
              <h3>Interests & additional details</h3>
            </div>
            <div className="pf__Resume_container-features-wrapper">
              <ResumeFeature
                Heading={"BEYOND THE BASICS"}
                Years={"1995 - PRESENT"}
                Location={"Citizen of the world"}
                Text={
                  <div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Basketball</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Swimming</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Movie enthusiast</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Nature exploring</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Traveling</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Personal growth</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Driver’s license</p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>Serbian </p>
                    </div>
                    <div className="pf__Resume_container-features-wrapper-Text-div">
                      &#8226;
                      <p>English </p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
