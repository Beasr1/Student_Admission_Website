import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Noticeboard from "../../components/NoticeBoard/noticeboard";
import Annoucement from "../../components/announcement/Annoucement";
import "./Home.css";
import lnmlogo from "../../assets/lnm.png";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

function Home({ logged }) {
  const [isActive, setisActive] = useState(false);
  const [isActive1, setisActive1] = useState(false);
  const noticeData = [
    {
      title: "Y23 Fee Deposit Msc.",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (Y-21 Batch -M. Sc. Program)`,
    },
    {
      title: "Y20 Fee Deposit 3rd Year",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (3rd Year Y-20 Batch UG and Integrated B. Tech-M.Tech program)`,
    },
    {
      title: "Y19 Fee Deposit 4th Year",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (4th Year Y-19 Batch UG and Integrated B. Tech-M.Tech program`,
    },
    {
      title: "Y21 Fee Deposit Phd Program",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (Y-21 Ph.D Program)`,
    },
  ];
  const eventData = [
    {
      title: "Section 1",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (Y-21 Batch -M. Sc. Program)`,
    },
    {
      title: "Section 2",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (3rd Year Y-20 Batch UG and Integrated B. Tech-M.Tech program)`,
    },
    {
      title: "Section 3",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (4th Year Y-19 Batch UG and Integrated B. Tech-M.Tech program`,
    },
    {
      title: "Section 3",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (Y-21 Ph.D Program)`,
    },
  ];
  const announceData = [
    {
      title: "Gusto 2022!",
      content: `Gusto 2022 is On 20th Novemeber,2022. Singer Navjot Ahuja coming!`,
    },
    {
      title: "Section 2",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (3rd Year Y-20 Batch UG and Integrated B. Tech-M.Tech program)`,
    },
    {
      title: "Section 3",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (4th Year Y-19 Batch UG and Integrated B. Tech-M.Tech program`,
    },
    {
      title: "Section 3",
      content: `Enrollment and Fee deposit Odd Semester-2022-23 (Y-21 Ph.D Program)`,
    },
  ];

  return (
    <div>
      <div className="lnmiit-logo-header">
        <div id="lnm-logo">
          <img src={lnmlogo} alt="" />
        </div>
        <div id="lnm-title">
          <h1>The LNM Institute of Information Technology</h1>
        </div>
        <div id="sociallinkslnm">
          <a href="https://www.facebook.com/lnmiit.ac.in">
            <BsFacebook />
          </a>
          <a href="https://alumni.lnmiit.ac.in/">
            <HiOutlineUserGroup />
          </a>
        </div>
      </div>
      <div className="home-mid-content">
        <div id="carouselLnm">
          <Carousel />
        </div>
        <div id="notice-home">
          <div className="notice-header">
            <h4 id="notice-heading">Notice Board</h4>
            <h4
              className="notice-status"
              onClick={() => {
                setisActive1(false);
                setisActive(!isActive);
              }}
            >
              {isActive ? "-" : "+"}
            </h4>
          </div>
          {isActive && <Noticeboard noticeData={noticeData} />}
          <div className="notice-header">
            <h4 id="notice-heading">Events</h4>
            <h4
              className="notice-status"
              onClick={() => {
                setisActive(false);
                setisActive1(!isActive1);
              }}
            >
              {isActive1 ? "-" : "+"}
            </h4>
          </div>
          {isActive1 && <Noticeboard noticeData={eventData} />}
        </div>
      </div>
      <div className="lnm-morecontent">
        <div className="announcements-lnm">
          <Annoucement />
        </div>
        <div className="upcoming-boxes">
          <div className="upcoming-box" id="box-1">
            <h5 className="upcoming-title">Important Links</h5>
            <ul id="important-links">
              <li>
                <a href="https://erp.lnmiit.ac.in/onlinechallan/">
                  Odd Semester-2022-23 Fee Payment Link
                </a>
              </li>
              <li>
                <a href="https://erp.lnmiit.ac.in/mis/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw=?enc=g4R9l5ijEYlvf3Kt0STjKQ==">
                  MIS/ Grievance Redressal Portal
                </a>
              </li>
              <li>
                <a href="https://www.lnmiit.ac.in/Award-and-Recognition.html">
                  Award And Recognition
                </a>
              </li>
            </ul>
          </div>
          <div className="upcoming-box" id="box-2">
            <h5 className="upcoming-title">Upcoming Events</h5>
            <ul id="important-links">
              <li>
                <a href="#upcoming">
                  Distinguished Lecture on Artificial Intelligence: Past,
                  Present and Future by Dr. C. Mohan
                </a>
              </li>
              <li>
                <a href="#UASDSA">Expert Talks by Prof. S Kumaresan</a>
              </li>
              <li>
                <a href="#DSAKDJSAKLD">
                  Relationship between work system approach and digital
                  innovation
                </a>
              </li>
            </ul>
          </div>
          <div className="upcoming-box" id="box-3">
            <h5 className="upcoming-title">Seminars</h5>
            <ul id="important-links">
              <li>
                <a href="https://space2022.lnmiit.ac.in/">
                  <span className="dates">08 Dec-11 Dec 2022</span> 12th
                  International Conference on Security,Privacy and Applied
                  Cryptographic Engineering 2022 (SPACE)
                </a>
              </li>
              <li>
                <a href="https://www.lnmiit.ac.in/uploaded_files/HSS_Conference_Flyer.pdf">
                  <span className="dates">29 Apr-01 May 2022 </span>
                  International Conference on Cultural Trajectories through
                  Language, Literature and Media
                </a>
              </li>
              <li>
                <a href="https://sites.google.com/view/iwpqc/?pli=1 ">
                  <span className="dates"> 10 Dec-11 Dec 2021</span> Second
                  International Workshop
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-admission">
          <h3 id="lnm-admission">
            {!logged && <Link to="/login">APPLY FOR UG ADMISSION!</Link>}
            {logged && <Link to="/fillform">APPLY FOR UG ADMISSION</Link>}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
