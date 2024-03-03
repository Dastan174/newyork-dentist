import axios from "axios";
import { createContext, useContext, useState } from "react";
import React from "react";

let API = "http://127.0.0.1:8000/doctors/";
const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyContext = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  async function getDoctors() {
    let res = await axios.get(`${API}`);
    setDoctors(res.data);
  }
  // console.log(doctors);
  const values = {
    doctors,
    getDoctors,
  };
  return <myContext.Provider value={values}>{children}</myContext.Provider>;
};

export default MyContext;
