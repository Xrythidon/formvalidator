import React, { useState } from "react";

const FormControl = ( {tag}) => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value)
  }


  return (
    <div className="form-control">
      <label htmlFor={tag}>{tag}</label>
      <input type={ (tag === "Username" || tag === "Email") ? "text" : "password"} value={state} onChange={handleChange}/>
      <small>Error message</small>
    </div>
  );
};

export default FormControl;
