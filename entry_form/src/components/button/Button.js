import React from "react";
import "./button.css";

function Button({ onClick }) {
  return (
    <button className="buton" onClick={onClick}>
      Log in
    </button>
  );
}

export default Button;
