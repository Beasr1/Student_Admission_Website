import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import "./Track.css";
function Track() {
  const { undergraduates, getUndergraduates } = useAppContext();
  useEffect(() => {
    getUndergraduates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const underList = () => {
    return undergraduates.map((undergraduate) => {
      return (
        <tr className="eligible-data">
          <td>{undergraduate.personalDetails.fullname}</td>
          <td>{undergraduate.personalDetails.email}</td>
          <td>{undergraduate.personalDetails.percentile}</td>
        </tr>
      );
    });
  };

  return (
    <div className="track-container">
      <div className="track-container-background">
        <h1 id="students-list">Students List:</h1>
        <table>
          <thead>
            <tr className="student-list-table">
              <th>Full Name</th>
              <th>Email</th>
              <th>Percentile</th>
            </tr>
          </thead>
          <tbody>{underList()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Track;
