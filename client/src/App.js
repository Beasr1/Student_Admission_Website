import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useAppContext } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
// import About from "./components/layout/About";
import StudentList from "./components/student/StudentList";
import StudentDetails from "./components/student/StudentDetails";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import MajorList from "./components/major/MajorList";
import AddMajor from "./components/major/AddMajor";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Appform from "./components/AppForm/Appform";
import NavbarHome from "./components/NavBar/NavbarHome";
import Home from "./pages/Home/Home";
import Announcement from "./components/announcement/Annoucement";
// import Footer from "./components/Footer/Footer";
import Admission from "./pages/Admission/Admission";
import Life from "./pages/Life/Life";
import Placement from "./pages/Placement/Placement";
import Timetable from "./pages/TimeTable/Timetable";
import Gallery from "./pages/Gallery/Gallery";
import DemoCarousel from "./components/Carousel/Carousel";
import About from "./pages/About/About";

const App = () => {
  const { getStudents, getMajors } = useAppContext();
  const [logged, setLogged] = useState(false);
  const user = localStorage.getItem("token");

  useEffect(() => {
    getStudents();
    getMajors();
    console.log(user);
    if (user) setLogged(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="lol">
      {/* <Navbar logged={logged} /> */}
      <NavbarHome logged={logged} />
      <Routes>
        {/* {user && <Route exact path="/" element={<StudentList />} />} */}
        {user && <Route exact path="/about" element={<About />} />}
        {user && <Route exact path="/students/add" element={<AddStudent />} />}
        {user && (
          <Route exact path="/students/edit/:id" element={<EditStudent />} />
        )}
        {user && (
          <Route exact path="/students/:id" element={<StudentDetails />} />
        )}
        {user && <Route exact path="/majors" element={<MajorList />} />}
        {user && <Route exact path="/majors/add" element={<AddMajor />} />}
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        {/* <Route path="/signup" exact element={<Signup />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/fillform" element={<Appform />} /> */
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/Admission" exact element={<Admission />} />
        <Route path="/life" exact element={<Life />} />
        <Route path="/Placement" exact element={<Placement />} />
        <Route path="/Timetable" exact element={<Timetable />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/ann" exact element={<Announcement />} />
        <Route path="/cc" exact element={<DemoCarousel />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
