import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
const StudentShortlist = (list) => {
  const { students, getStudents } = useAppContext();
  const { major, addUndergraduate } = useAppContext();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const shortlist = () => {
    for (var curStudent in students) {
      let pref = curStudent.prefBranch;
      const obj = { str: "", pre: 10 };
      const student = {
        curStudent,
      };
      for (let i = 1; i <= pref.length(); i++) {
        if (i == 1) {
          if (curStudent.percentile > list.cse && pref[i] < obj.pre) {
            obj.str = "cse";
            obj.pre = pref[i];
          }
        } else if (i == 2) {
          if (curStudent.percentile > list.cce && pref[i] < obj.pre) {
            obj.str = "cce";
            obj.pre = pref[i];
          }
        } else if (i == 3) {
          if (curStudent.percentile > list.ece && pref[i] < obj.pre) {
            obj.str = "ece";
            obj.pre = pref[i];
          }
        } else {
          if (curStudent.percentile > list.me && pref[i] < obj.pre) {
            obj.str = "me";
            obj.pre = pref[i];
          }
        }
        student = {
          ...curStudent,
          major: `${obj.str}`,
        };
        addUndergraduate(student);
      }
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
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
