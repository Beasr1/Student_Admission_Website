import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useAppContext } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
// import About from "./components/layout/About";
import StudentList from "./components/Admin/StudentList";
import StudentDetails from "./components/Admin/StudentDetails";
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
import StudentEdit from "./components/Admin/StudentEdit";
import Admin from "./pages/Admin/Admin";

const App = () => {
  const { getStudents, getMajors } = useAppContext();
  const [logged, setLogged] = useState(false);
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("user");
  const password = localStorage.getItem("pass");
  const [adminstrator, setAdministrator] = useState("none");

  useEffect(() => {
    getStudents();
    getMajors();
    console.log(user);
    if (user) setLogged(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (admin === "a@gmail.com" && password === "Naman@123") {
      console.log("admin");
      setAdministrator("admin");
    } else {
      setAdministrator("user");
    }

    if (!admin || !user) {
      setAdministrator("none");
      setLogged(false);
    }
  }, []);

  return (
    <div className="lol">
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/Admin" exact element={<Admin />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
      {adminstrator === "admin" ? (
        <>
          <Navbar logged={logged} />

          <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
            {user && <Route exact path="/" element={<StudentList />} />}
            {!user && <Route exact path="/" element={<Login />} />}
            <Route path="/login" exact element={<Login />} />
            <Route path="/fillform" element={<Appform />} />
            <Route path="/students/:id" element={<StudentDetails/>}/>
            <Route path="/students/edit/:id" element={<StudentEdit/>}/>
          </Routes>
        </>
      ) : (
        // client
        <>
          <NavbarHome logged={logged} />
          <Routes>
            <Route exact path="/" element={<Home logged={logged} />} />
            {user && <Route exact path="/about" element={<About />} />}
            {user && <Route exact path="/students/add" element={<Appform />} />}

            {user && (
              <Route
                exact
                path="/students/edit/:id"
                element={<EditStudent />}
              />
            )}
            {user && (
              <Route exact path="/students/:id" element={<StudentDetails />} />
            )}
            {user && <Route exact path="/majors" element={<MajorList />} />}
            {user && <Route exact path="/majors/add" element={<AddMajor />} />}
            {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
            {/* <Route path="/signup" exact element={<Signup />} /> */}
            <Route path="/About" element={<About />} />
            <Route path="/fillform" element={<Appform />} />
            {/* <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} /> */}
            <Route
              path="/Admission"
              exact
              element={<Admission logged={logged} />}
            />
            <Route path="/life" exact element={<Life />} />
            <Route path="/Placement" exact element={<Placement />} />
            <Route path="/Timetable" exact element={<Timetable />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/ann" exact element={<Announcement />} />
            <Route path="/cc" exact element={<DemoCarousel />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
