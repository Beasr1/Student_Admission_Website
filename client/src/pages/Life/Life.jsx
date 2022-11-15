import "./Life.css";
import React from "react";
function Life() {
  return (
    <div className="life-bkg">
      <div className="life-container">
        <h1 className="lifetitle">Student Life @ LNMIIT Campus</h1>
        <div id="line"></div>
        <div className="lifeContent">
          <p className="life-para">
            The institute provides its students with opportunities for exploring
            and enhancing their talents not only in the Technology but also in
            extra- curricular activities.
          </p>
          <p className="life-para">
            Accordingly, our academic Programmes are backed up with appropriate
            co- curricular and extra-curricular inputs promoting culture,
            sports, self-governance and values; all of which help the students
            towards becoming complete human beings.
          </p>
          <p className="life-para">
            The students of the institute live together in the hostels which
            helps in developing a healthy and social relationship among them.
            Ragging is strictly prohibited in the campus. Each year student
            elections are held, for various clubs and for food arrangements,
            interaction of the student community with the administration of the
            university, hostel facilities, and coordination of active sports and
            cultural activities in the university. Various clubs and committees
            are :
          </p>
          <ul className="clubs">
            <li id="club1">Cultural Committee.</li>
            <li id="club2">Sports Committee.</li>
            <li id="club3">Literary Club.</li>
            <li id="club4">Mess Committee.</li>
            <li id="club5">Movie Club.</li>
          </ul>
          <p className="life-para">
            More to this, the students are the chief participants in organising
            various festivals and celebrations with the institutes inter college
            cultural and technical fest in the institute. Every major event in
            the university has been organised, handled and coordinated
            completely by the students of the institute. Faculty and management
            of the institute is always with the students of the institute are :
          </p>
        </div>
      </div>
    </div>
  );
}

export default Life;
