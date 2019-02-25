import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center" {...props}>
      {props.children}
    </div>
  );
}

export default Jumbotron;
  