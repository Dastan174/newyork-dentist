import { createContext, useContext } from "react";
import React from "react";

const myContext = createContext();
export const useMyContext = () => useContext(myContext);

const MyContext = ({ children }) => {
  const values = {};
  return <myContext.Provider value={values}>{children}</myContext.Provider>;
};

export default MyContext;
