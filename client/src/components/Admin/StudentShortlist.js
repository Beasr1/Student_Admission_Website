import React from "react";
import { useAppContext } from "../../context/AppContext";
const StudentShortlist=(list)=>{
    const { students, getStudents } = useAppContext();
  
    useEffect(() => {
      getStudents();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   



}