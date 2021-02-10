import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "../Inputs/Inputs.scss";

import { toCamelCase } from "../../../utils/heplers";

export default function CheckInputs(props) {
  const {
    labelText,
    labelImgSrc,
    inputsName,
    options,
    onChange,
   //// values,
  } = props;
  const handleChange = (e) => onChange(inputsName, toCamelCase(e.target.value));
  
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    onChange(inputsName, checked);
  }, [checked]);

  return (
    <div className="filtersColumn">
      {labelText && (
        <label htmlFor={inputsName}>
          {labelImgSrc && (
            <Image src={labelImgSrc} className="form-icon-label" />
          )}
          {labelText}
        </label>
      )}
       <div className="inputsContainer" onChange={handleChange}>
        {options.map((o, i) => (
          <div key={`check-${inputsName}-${i}`} className="checkContainer">
            <input
              type="checkbox"
              name={inputsName}
              value={toCamelCase(o)}
             /* defaultChecked={
             //   values.some((value) => value === toCamelCase(o)) ? true : false
              }*/
            />
            <span className="checkmark"></span>
            <span>&nbsp; {o}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


