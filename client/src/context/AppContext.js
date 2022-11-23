import React, { useReducer, createContext, useContext } from "react";
import axios from "axios";

import reducer from "./AppReducer";
import {
  STUDENTS_GET,
  STUDENT_GET,
  STUDENT_ADD,
  STUDENT_EDIT,
  STUDENT_DELETE,
  STUDENT_ERROR,
  UNDERGRADUATES_GET,
  UNDERGRADUATE_GET,
  UNDERGRADUATE_ADD,
  UNDERGRADUATE_EDIT,
  UNDERGRADUATE_DELETE,
  UNDERGRADUATE_ERROR,
} from "./ActionTypes";

const AppContext = createContext();

const initialState = {
  students: [],
  student: {},
  loading: true,
  error: {},
  undergraduate: {},
  undergraduates: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  // Get all students
  const getStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/students");

      dispatch({ type: STUDENTS_GET, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: STUDENT_ERROR, payload: err.message.error });
    }
  };

  // Get a single student
  const getStudent = async (stuId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/students/${stuId}`
      );

      dispatch({ type: STUDENT_GET, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Add a student
  const addStudent = async (formData) => {
    try {
      console.log(formData);
      const { data } = await axios.post(
        "http://localhost:5000/api/students/create",
        formData
      );

      dispatch({ type: STUDENT_ADD, payload: data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Edit a student
  const editStudent = async (stuId, formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/students/update/${stuId}`,
        formData,
        config
      );

      dispatch({
        type: STUDENT_EDIT,
        payload: { id: stuId, updatedStudent: data },
      });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  // Delete student
  const deleteStudent = async (stuId) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${stuId}`);

      dispatch({ type: STUDENT_DELETE, payload: stuId });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.data.error[0] });
    }
  };

  //----------------------------------------------------------------------------------------
  //UNDERGRADUATES
  // Get all undergraduates
  const getUndergraduates = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/undergraduates"
      );
      console.log(data);
      dispatch({ type: UNDERGRADUATES_GET, payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: UNDERGRADUATE_ERROR, payload: err.message.error });
    }
  };

  // Get a single undergraduate
  const getUndergraduate = async (undId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/undergraduates/${undId}`
      );

      dispatch({ type: UNDERGRADUATE_GET, payload: data });
    } catch (err) {
      dispatch({
        type: UNDERGRADUATE_ERROR,
        payload: err.response.data.error[0],
      });
    }
  };

  // Add a undergraduate
  const addUndergraduate = async (formData) => {
    try {
      console.log(formData);
      const { data } = await axios.post(
        "http://localhost:5000/api/undergraduates/create",
        formData
      );

      dispatch({ type: UNDERGRADUATE_ADD, payload: data });
    } catch (err) {
      dispatch({
        type: UNDERGRADUATE_ERROR,
        payload: err.response.data.error[0],
      });
    }
  };

  // Edit a undergraduate
  const editUndergraduate = async (undId, formData) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/undergraduates/update/${undId}`,
        formData,
        config
      );

      dispatch({
        type: UNDERGRADUATE_EDIT,
        payload: { id: undId, updatedUndergraduate: data },
      });
    } catch (err) {
      dispatch({
        type: UNDERGRADUATE_ERROR,
        payload: err.response.data.error[0],
      });
    }
  };

  // Delete undergraduate
  const deleteUndergraduate = async (undId) => {
    try {
      await axios.delete(`http://localhost:5000/api/undergraduates/${undId}`);

      dispatch({ type: UNDERGRADUATE_DELETE, payload: undId });
    } catch (err) {
      dispatch({
        type: UNDERGRADUATE_ERROR,
        payload: err.response.data.error[0],
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getStudents,
        getStudent,
        addStudent,
        editStudent,
        deleteStudent,
        getUndergraduates,
        getUndergraduate,
        addUndergraduate,
        editUndergraduate,
        deleteUndergraduate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
