import "./Appform.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { First } from "react-bootstrap/esm/PageItem";
function Appform() {
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
    AdmissionYear: date.getFullYear(),
    fullname: "",
    gender: "gender",
    BirthPlace: "",
    State: "",
    City: "",
    ContactAddress: "",
    Dob: year + "-" + month + "-" + day,
    ContactNo: "",
    email: "",
    percentile: "",
    prefBranch: ["1", "2", "3", "4"],
    email: "",
  };

  const [isFilled, setisFilled] = useState(true);
  const [details, setdetails] = useState(formDetails);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setisFilled(true);
    setdetails((details) => ({
      ...details,
      prefBranch: [cse, ece, cce, me],
    }));
    console.log(details);
    // if (isFilled) {
    //   alert("Form submitted successfully");
    //   window.location = "/status"; //redirect to page after submission
    // }
    //    await fetch('http://localhost:5000/api/students/submit', {
    //     method: 'POST',
    //     body: details
    // })
    await axios.post("http://localhost:5000/api/students/submit", details);
    //    await fetch('http://localhost:5000/api/students/submit', {
    //     method: 'POST',
    //     body: details
    // })
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
    console.log(details);
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
          <h1 className="title">Registration Form</h1>
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
            <div className="form-features">
              <div>Branch Preference</div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appform;

{
  /* <div className="form-header">
<span>Fill Your Form Details</span>
<div className="line"></div>
<ul className="form-options">
  <Link to="">Back</Link>
  <Link to="/">Logout</Link>
</ul>
</div>
<span className="Pi"></span>
<form>
<div className="partitions">
  <div className="partition-1">
    <span>Admission Year: {formDetails.AdmissionYear}</span>
    <br />
    <label htmlFor="fullname"></label> <br />
    <input
      type="text"
      name="fullname"
      id="fullname"
      value={details.fullname}
      onChange={handleChange}
      placeholder="Enter Your Full Name"
    />
    <br />
    <label htmlFor="BirthPlace"></label> <br />
    <input
      type="text"
      name="BirthPlace"
      id="BirthPlace"
      value={details.BirthPlace}
      onChange={handleChange}
      placeholder="Enter Your Place Of Birth"
      required
    />
    <br />
    <label htmlFor="email"></label> <br />
    <input
      type="text"
      name="email"
      id="email"
      value={details.email}
      onChange={handleChange}
      placeholder="Enter Your Place Of Birth"
      required
    />
    <br />
    <label htmlFor="gender" className="gender"></label>
    <select
      value={details.gender}
      name="gender"
      id="gender"
      onChange={handleChange}
      required
    >
      <option value="m">Male</option>
      <option value="f">Female</option>
      <option value="gender">Gender</option>
    </select>
  </div>
  <input
    type="text"
    name="State"
    id="State"
    value={details.State}
    onChange={handleChange}
    placeholder="Enter State"
    required
  />
  <br />
  <input
    type="text"
    name="City"
    id="City"
    value={details.City}
    onChange={handleChange}
    placeholder="Enter City"
    required
  />
  <br />
  <div className="vertical-line"></div>
  <div className="partition-2">
    <label htmlFor="ContactAddress"></label>
    <br />
    <textarea
      name="ContactAddress"
      id="ContactAddress"
      value={details.ContactAddress}
      placeholder="enter your home address"
      onChange={handleChange}
      rows={4}
      cols={50}
      maxLength={100}
      required
    />

    <br />
    <input
      type="date"
      id="Dob"
      name="Dob"
      value={details.Dob}
      onChange={handleChange}
      required
    />
    <br />
    <label htmlFor="contact-no" className="contact-no"></label>
    <input
      type="tel"
      name="ContactNo"
      id="ContactNo"
      value={details.ContactNo}
      placeholder="XXXXXXXXXX"
      pattern="[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}"
      required
      onChange={handleChange}
    />
    <br />

    <label htmlFor="percentile" className="percentile"></label>
    <input
      type="number"
      name="percentile"
      step="any"
      id="percentile"
      value={details.percentile}
      placeholder="enter percentile"
      required
      onChange={handleChange}
    />
    <br />
    <label htmlFor="pref">CSE</label>
    <select name="pref" id="pref" value={cse} onChange={handlecse}>
      {prefBranch.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
    <label htmlFor="pref">ECE</label>
    <select name="pref" id="pref" value={ece} onChange={handleece}>
      {prefBranch.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
    <label htmlFor="pref">ME</label>
    <select name="pref" id="pref" value={me} onChange={handleme}>
      {prefBranch.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
    <label htmlFor="pref">CCE</label>
    <select name="pref" id="pref" value={cce} onChange={handlecce}>
      {prefBranch.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
    {/* <label htmlFor="uploadFiles">Upload Documents:</label>
    <input
      type="file"
      name="uploadFiles"
      id="uploadFiles"
      multiple
      onChange={handleChange}
    /> */
}
//   </div>
// </div>
// <button type="submit" className="submit" onClick={handleSubmit}>
//   SUBMIT
// </button>
// </form> */}
