import "./Appform.css";
import React,{ useState } from "react";
import { Link } from "react-router-dom";
function Appform() {
  const date = new Date();
  const year = date.getFullYear();
  let day = date.getDay();
  let month = date.getMonth() + 1;

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  const formDetails = {
    AdmissionYear: date.getFullYear(),
    surname: "",
    gender: "gender",
    BirthPlace: "",
    State: "Enter State",
    City: "Enter City Name",
    ContactAddress: "",
    Dob: year + "-" + month + "-" + day,
    ContactNo: "",
    Files: null,
  };

  const [isFilled, setisFilled] = useState(true);
  const [details, setdetails] = useState(formDetails);

  const handleSubmit = (event) => {
    setisFilled(true);
    if (isFilled) {
      alert("Form submitted successfully");
      window.location = "/status"; //redirect to page after submission
    }
    event.preventDefault();
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

  return (
    <div>
      <div className="form-container">
        <h1 className="title">Registration Form</h1>
        <div className="form-header">
          <span>Fill Your Form Details</span>
          <div className="line"></div>
          <ul className="form-options">
            <Link to="">Back</Link>
            <Link to="/">Logout</Link>
          </ul>
        </div>
        <span className="Pi">Personal Information</span>
        <form onSubmit={handleSubmit} method="get">
          <div className="partitions">
            <div className="partition-1">
              <span>Admission Year: {formDetails.AdmissionYear}</span>
              <br />
              <label htmlFor="surname">Surname:</label> <br />
              <input
                type="text"
                name="surname"
                id="surname"
                value={details.surname}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
              />
              <br />
              <label htmlFor="BirthPlace">BirthPlace:</label> <br />
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
              <label htmlFor="gender" className="gender">
                Gender:
              </label>
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
            <div className="vertical-line"></div>
            <div className="partition-2">
              <label htmlFor="ContactAddress">Contact Address:</label>
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
              <label htmlFor="Dob" className="dob">
                Date Of Birth:
              </label>
              <input
                type="date"
                id="Dob"
                name="Dob"
                value={details.Dob}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="contact-no" className="contact-no">
                Contact Number:
              </label>
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
              <label htmlFor="uploadFiles">Upload Documents:</label>
              <input
                type="file"
                name="uploadFiles"
                id="uploadFiles"
                multiple
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appform;
