import "./Admin.css";
import { useState } from "react";
import axios from "axios";
function Admin() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/api/eligible", eligible);
  };
  const [eligible, seteligible] = useState({
    cse: "",
    ece: "",
    me: "",
    cce: "",
  });
  const handlecse = (event) => {
    seteligible({
      ...eligible, // Copy the old fields
      cse: event.target.value, // But override this one
    });
  };
  const handleece = (event) => {
    seteligible({
      ...eligible, // Copy the old fields
      ece: event.target.value, // But override this one
    });
  };
  const handleme = (event) => {
    seteligible({
      ...eligible, // Copy the old fields
      me: event.target.value, // But override this one
    });
  };
  const handlecce = (event) => {
    seteligible({
      ...eligible, // Copy the old fields
      cce: event.target.value, // But override this one
    });
  };
  return (
    <div>
      <div className="admin-form-container">
        <h1 id="admin-title">Branch-wise percentile criteria.</h1>
        <div className="branch-wise-cards">
          <h3>Enter Eligibility Percentile For:</h3>
          <form action="">
            <div className="branch-1">
              <label htmlFor="cse">CSE:</label>
              <input
                type="number"
                required
                placeholder="enter percentile"
                value={eligible.cse}
                onChange={handlecse}
              />
            </div>
            <div className="branch-2">
              <label>CCE:</label>
              <input
                type="number"
                required
                value={eligible.cce}
                placeholder="enter percentile"
                onChange={handlecce}
              />
            </div>
            <div className="branch-2">
              <label>ECE:</label>
              <input
                type="number"
                required
                value={eligible.ece}
                placeholder="enter percentile"
                onChange={handleece}
              />
            </div>
            <div className="branch-2">
              <label>ME:</label>
              <input
                type="number"
                required
                value={eligible.me}
                placeholder="enter percentile"
                onChange={handleme}
              />
            </div>
            <button type="submit" className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
