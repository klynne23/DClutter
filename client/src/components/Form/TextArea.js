import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group text-left">
    <label style={{color:"black"}}>{props.text}</label>
      <textarea className="form-control" rows="6" {...props} />
    </div>
  );
}
