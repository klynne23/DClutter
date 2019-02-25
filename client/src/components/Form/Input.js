import React from "react";

export function Input(props) {
  return (
      <div className="input-group">
    <div className="input-group-prepend">
      <label className="input-group-text" >{props.text}</label>
    </div>
      <input className="form-control" {...props} />
    </div>
  );
}
