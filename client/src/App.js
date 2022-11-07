import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  const { getStudents, getMajors } = useAppContext();

  useEffect(() => {
    getStudents();
    getMajors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<StudentList/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/students/add' element={<AddStudent/>} />
          <Route exact path='/students/edit/:id' element={<EditStudent/>} />
          <Route exact path='/students/:id' element={<StudentDetails/>} />
          <Route exact path='/majors' element={<MajorList/>} />
          <Route exact path='/majors/add' element={<AddMajor/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
