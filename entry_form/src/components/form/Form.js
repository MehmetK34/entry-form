import React from "react";
import "./form.css";

function Form({ children }) {
  //? children ozel prop ekledim.
  return <div className="form">{children}</div>;
}

export default Form;
