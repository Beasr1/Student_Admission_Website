import "./Admission.css";
import React from "react";
function Admission({logged}) {
  const onclick = () => {
    if(logged) window.location="/fillform"
    else window.location = "/login";
  };
  return (
    <div id="parentcontainer">
      <div className="admission-container">
        <div className="content-container">
          <h4>
            Welcome to The LNM Institute of Information Technology, Jaipur
          </h4>
          <div id="line"></div>
          <h1>Admissions 2022-23</h1>
          <button id="applynow" onClick={onclick}>
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admission;
