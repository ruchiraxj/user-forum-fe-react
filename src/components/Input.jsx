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

export const Textarea = (props) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.name} className="form-label">{props.label}</label>
      <textarea className="form-control" id={props.name} name={props.name} onChange={props.onChange} rows="5" placeholder={props.label}>{props.value}</textarea>
    </div>
  );
};


export const Select = (props) => {

  const values = props.values.map(function(item){
    return (
      <option key={item.id} value={item.id}>{item.name}</option>
    )
  });

  return (
    <select className="form-select mb-3" aria-label={props.label} onChange={props.onChange} id={props.name} name={props.name}>
      <option value="0">{props.label}</option>
      {values}
    </select>
  );
};
