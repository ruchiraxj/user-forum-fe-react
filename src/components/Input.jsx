import React from "react";

export const Input = (props) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={props.type}
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.label}
      ></input>
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};
