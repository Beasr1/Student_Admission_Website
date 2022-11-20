import React from "react";
import "./Placement.css";
import placementImg from "./../../assets/placementJpg.jpg";
import avg from "./../../assets/avg.png";
import Adobe from "../../assets/adobe.png";
import Amazon from "../../assets/amazon.png";
import BNY from "../../assets/BNYMellon.png";
import innovaccer from "../../assets/innovaccer.png";
import medianet from "../../assets/medianet.svg";
import oyo from "../../assets/oyo.png";
import vmware from "../../assets/vmware.png";
import olx from "../../assets/olx.png";
import slk from "../../assets/slk.png";

function Placement() {
  return (
    <div>
      <div className="placement-container">
        <div className="leftContainer">
          <div className="placement-img">
            <img src={placementImg} alt="" />
          </div>
        </div>
        <div className="rightContainer">
          <h4 class="boardheading">Updates</h4>
          <hr />
          <div className="boardcontent">
            <p>
              Students of LNMIIT participated in inter college robo-Olympics
              held at BITS Pilani (Apogee-22)and secured 2 position and the team
              consisted of Lakshya Choudhary, Ayush Sharma, Yash Pachauri, Rajat
              Bothra, Lakshay Setia and Muskan Singla.
            </p>
          </div>
        </div>
      </div>

      <div className="placement-content-container">
        <div className="leftContainer">
          <div className="placementAbout">
            <h4 className="placement-about">About Us</h4>
            <p class="paragraph">
              The Training and Placement Cell of the institute handles all
              aspects of placements at LNMIIT for the students of all
              departments. It is a student body, directly under the supervision
              of the honourable Director, headed by the Training and Placement
              Officer and guided by the Faculty Advisors .The Cell stands for
              branding the outlook of the university to the corporate and the
              industry.
            </p>
            <p class="paragraph">
              The Training and Placement Officer, Coordinators and the student
              representatives handle various crucial tasks in the Cell like
              reaching out to companies, scheduling and executing placement
              related activities and carrying out all offcial communication with
              recruiters and students. The Cell strives to match recruiter
              expectations with students’ aspirations. The team of student
              representatives coordinate the activities to ensure compliance
              with various institute policies and company offcials, who execute
              coordination with their recruiting organisations. Over the years
              the Cell has gone from strength to strength in achieving
              outstanding placements at LNMIIT and will continue to do so in the
              years to come
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <h4 className="boardheading">Successful Startup</h4>

          <hr />
          <div className="boardcontent" id="startup">
            {/* <p>
              Zapp Invest(2022) by Naman Goyal(Y20):
              <br></br>
              Invest in startups with as little as Rs5000.
              <br></br>
              <br></br>
              Enuke Software(2008) by Manu Yadav(Y03)
              <br></br>
              <br></br>
              Big Sep Technologies(2008) by Vidit Paliwal(Y03)
            </p> */}
            <p>Zapp Invest(2022) by Naman Goyal(Y20):</p>
            <p> Invest in startups with as little as Rs5000.</p>
            <p>Enuke Software(2008) by Manu Yadav(Y03)</p>
            <p> Big Sep Technologies(2008) by Vidit Paliwal(Y03)</p>
          </div>
        </div>
      </div>
      <div id="our-achievement">
        <h4 id="placement-ACHIEVE">OUR ACHIEVEMENT</h4>
        <h1 id="cr">1 CR</h1>
        <h5 id="highest">HIGHEST SALARY</h5>
      </div>

      <div id="stats">
        <div className="leftimage">
          <h5>Brochure</h5>
          <button className="morestats">
            <a
              href="https://www.lnmiit.ac.in/uploaded_files/LNMIIT_Information_Brochure_2022_Final_Version_Low_Version.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brochure
            </a>
          </button>
        </div>
        <div id="line"></div>
        <div className="middle">
          <h5>Complete Stats</h5>
          <button className="morestats">
            <a
              href="http://placements.lnmiit.ac.in/Complete_placement.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Place Report
            </a>
          </button>
        </div>
      </div>

      <div className="recruiter-container">
        <div id="recruiter-title">
          <h1 className="placement-about">Major Recruiters...</h1>
        </div>
      </div>
      <div className="major-recruiter-company">
        <img src={BNY} alt="BNY" />
        <img src={Adobe} alt="adobe" />
        <img src={Amazon} alt="amazon" />
        <img src={innovaccer} alt="innovacer" />
      </div>
      <div className="major-recruiter-company">
        <img src={medianet} alt="medianet" />
        <img src={oyo} alt="oyo" />
        <img src={vmware} alt="vmware" />
        <img src={olx} alt="olx" />
      </div>
    </div>
  );
}

export default Placement;
