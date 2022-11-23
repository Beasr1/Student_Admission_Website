import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
const StudentShortlist = ({ list }) => {
  const { students, getStudents } = useAppContext();
  const { addUndergraduate } = useAppContext();
  const [numbe, setNumbe] = useState({
    cse: 0,
    ece: 0,
    cce: 0,
    me: 0,
  });

  useEffect(() => {
    getStudents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const shortlist = (event) => {
    event.preventDefault();
    console.log(list);
    students.map((curStudent) => {
      console.log(curStudent);
      const pref = curStudent.prefBranch;
      console.log(pref);
      const obj = { str: "", pre: 10 };
      for (let i = 1; i <= 4; i++) {
        if (i == 1) {
          if (curStudent.percentile > list.cse && pref[i - 1] < obj.pre) {
            obj.str = "cse";
            obj.pre = pref[i - 1];
          }
        } else if (i == 2) {
          if (curStudent.percentile > list.cce && pref[i - 1] < obj.pre) {
            obj.str = "cce";
            obj.pre = pref[i - 1];
          }
        } else if (i == 3) {
          if (curStudent.percentile > list.ece && pref[i - 1] < obj.pre) {
            obj.str = "ece";
            obj.pre = pref[i - 1];
          }
        } else {
          if (curStudent.percentile > list.me && pref[i - 1] < obj.pre) {
            obj.str = "me";
            obj.pre = pref[i - 1];
          }
        }
        console.log(obj.str);
        if (!(obj.str === "")) {
          let num = "";
          if (obj.str === "cse") {
            num = numbe.cse;
            setNumbe((prevState) => {
              return { ...prevState, cse: prevState.cse + 1 };
            });
          } else if (obj.str === "ece") {
            num = numbe.cse;
            setNumbe((prevState) => {
              return { ...prevState, ece: prevState.cse + 1 };
            });
          } else if (obj.str === "cce") {
            num = numbe.cse;
            setNumbe((prevState) => {
              return { ...prevState, cce: prevState.cse + 1 };
            });
          } else {
            num = numbe.cse;
            setNumbe((prevState) => {
              return { ...prevState, me: prevState.cse + 1 };
            });
          }
          const rolln = `${curStudent.AdmissionYear}` + `${obj.str}` + `${num}`;
          const ug = {
            personalDetails: curStudent,
            major: `${obj.str}`,
            roll: rolln,
          };
          addUndergraduate(ug);
        }
        return null;
      }
    });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="submit"
          onClick={shortlist}
          style={{ marginTop: "2rem" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default StudentShortlist;
