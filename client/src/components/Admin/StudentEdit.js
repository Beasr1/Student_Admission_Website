import "../AppForm/Appform.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { BsWindowSidebar } from "react-icons/bs";
function StudentEdit() {
  const { editStudent, student } = useAppContext();
  const date = new Date();
  const year = date.getFullYear();
  let day = date.getDay();
  let month = date.getMonth() + 1;
  const [prefBranch, setprefBranch] = useState(["1", "2", "3", "4"]);

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  const [cse, setcse] = useState("1");
  const [ece, setece] = useState("2");
  const [cce, setcce] = useState("3");
  const [me, setme] = useState("4");

  const formDetails = {
    AdmissionYear: student.AdmissionYear,
    fullname: student.fullname,
    gender:student.gender ,
    BirthPlace:student.BirthPlace,
    State:student.State,
    City:student.City,
    ContactAddress:student.ContactAddress,
    Dob: student.Dob,
    ContactNo:student.ContactNo,
    email:student.email,
    percentile:student.percentile ,
    prefBranch:student.prefBranch,
    uploadFiles: student.uploadFiles,
  };
  const navigate = useNavigate();
  const [isFilled, setisFilled] = useState(true);
  const [details, setdetails] = useState(formDetails);
  const handleEdit = async (event) => {
    event.preventDefault();
    setisFilled(true);
    setdetails((details) => ({
      ...details,
      prefBranch: [cse, ece, cce, me],
    }));
    editStudent(student._id, details);
    navigate("/")
  };

  //changing field will make changes in the details object...
  const handleChange = (e) => {
    let item = e.target.name;

    let updatedValue = details;
    // console.log(item);
    if (e.target.name === "uploadFiles")
      updatedValue[`${item}`] = e.target.files;
    else updatedValue[`${item}`] = e.target.value; //name key par yeh value set ho rahi

    setdetails((details) => ({
      ...details,
      ...updatedValue,
    }));
  };
  const handlecse = (e) => {
    console.log(e.target.value, ece);
    if (ece === e.target.value) {
      console.log(ece, cse);
      setece(cse);
    } else if (cce === e.target.value) {
      setcce(cse);
    } else if (me === e.target.value) {
      setme(cse);
    }
    setcse(e.target.value);
    e.preventDefault();
  };
  const handlecce = (e) => {
    console.log(e.target.value, ece);
    if (ece === e.target.value) {
      setece(cce);
    } else if (cse === e.target.value) {
      setcse(cce);
    } else if (me === e.target.value) {
      setme(cce);
    }
    setcce(e.target.value);
    e.preventDefault();
  };
  const handleme = (e) => {
    console.log(e.target.value, ece);
    if (ece === e.target.value) {
      setece(me);
    } else if (cse === e.target.value) {
      setcse(me);
    } else if (cce === e.target.value) {
      setcce(me);
    }
    setme(e.target.value);
    e.preventDefault();
  };
  const handleece = (e) => {
    console.log(e.target.value, ece);
    if (cse === e.target.value) {
      setcse(ece);
    } else if (cce === e.target.value) {
      setcce(ece);
    } else if (me === e.target.value) {
      setme(ece);
    }
    setece(e.target.value);
    e.preventDefault();
  };
  return (
    <div className="form-container-container">
      <div className="form-container">
        <div className="form-background">
          <h1 className="title">Update Detail Form</h1>
          <form action="" id="register-form">
            <div className="form-features">
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={details.fullname}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="form-box"
              />
              <input
                type="text"
                name="BirthPlace"
                id="BirthPlace"
                value={details.BirthPlace}
                onChange={handleChange}
                placeholder="Enter Your Place Of Birth"
                required
                className="form-box"
              />
            </div>
            <div className="form-features">
              <input
                type="text"
                name="email"
                id="email"
                value={details.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="form-box"
              />
              <input
                type="tel"
                name="ContactNo"
                id="ContactNo"
                value={details.ContactNo}
                placeholder="XXXXXXXXXX"
                pattern="[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}"
                required
                onChange={handleChange}
                className="form-box"
              />
            </div>
            <div className="form-features">
              <input
                type="text"
                name="State"
                id="State"
                value={details.State}
                onChange={handleChange}
                placeholder="Enter State"
                required
                className="form-box"
              />
              <input
                type="text"
                name="City"
                id="City"
                value={details.City}
                onChange={handleChange}
                placeholder="Enter City"
                required
                className="form-box"
              />
            </div>

            <div className="form-features">
              <input
                type="number"
                name="percentile"
                step="any"
                id="percentile"
                value={details.percentile}
                placeholder="enter percentile"
                required
                onChange={handleChange}
                className="form-box"
              />

              <select
                value={details.gender}
                name="gender"
                id="gender"
                onChange={handleChange}
                required
                className="form-box"
              >
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="gender">Gender</option>
              </select>
            </div>
            <div className="form-features">
              <textarea
                name="ContactAddress"
                id="ContactAddress"
                value={details.ContactAddress}
                placeholder="enter your home address"
                onChange={handleChange}
                rows={4}
                cols={50}
                maxLength={200}
                required
                className="form-box"
              />
            </div>
            <label htmlFor="Dob" style={{ display: "inline" }}>
              Dob:
            </label>
            <input
              type="date"
              id="Dob"
              name="Dob"
              value={details.Dob}
              onChange={handleChange}
              required
              className="form-box"
              style={{ display: "inline" }}
            />
            <div className="form-features form-branch">
              <div style={{ paddingTop: "22px" }}>Branch Preference:</div>
              <div className="branchesss">
                <div>
                  <label htmlFor="pref">CSE</label>
                  <select
                    name="pref"
                    id="pref"
                    value={cse}
                    onChange={handlecse}
                    className="form-box branches"
                  >
                    {prefBranch.map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pref">ECE</label>
                  <select
                    name="pref"
                    id="pref"
                    value={ece}
                    onChange={handleece}
                    className="form-box branches"
                  >
                    {prefBranch.map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pref">ME</label>
                  <select
                    name="pref"
                    id="pref"
                    value={me}
                    onChange={handleme}
                    className="form-box branches"
                  >
                    {prefBranch.map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pref">CCE</label>
                  <select
                    name="pref"
                    id="pref"
                    value={cce}
                    onChange={handlecce}
                    className="form-box branches"
                  >
                    {prefBranch.map((element) => (
                      <option value={element}>{element}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
             <button type="submit" className="submit" onClick={handleEdit}>
   SAVE CHANGES </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentEdit;
