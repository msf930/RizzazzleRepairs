import React from "react";
import ReactDOM from "react-dom";

import "./Mailto.css";



function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}


export default Mailto;