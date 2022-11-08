import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { useAppContext } from "./context/AppContext";

import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import StudentList from "./components/student/StudentList";
import StudentDetails from "./components/student/StudentDetails";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import MajorList from "./components/major/MajorList";
import AddMajor from "./components/major/AddMajor";
import Signup from "./components/Singup";
import Login from "./components/Login";

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
    <div>
      <Navbar logged={logged} />
      <div className="container">
        <Routes>
          {user && <Route exact path="/" element={<StudentList />} />}
          {user && <Route exact path="/about" element={<About />} />}
          {user && (
            <Route exact path="/students/add" element={<AddStudent />} />
          )}
          {user && (
            <Route exact path="/students/edit/:id" element={<EditStudent />} />
          )}
          {user && (
            <Route exact path="/students/:id" element={<StudentDetails />} />
          )}
          {user && <Route exact path="/majors" element={<MajorList />} />}
          {user && <Route exact path="/majors/add" element={<AddMajor />} />}

          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
