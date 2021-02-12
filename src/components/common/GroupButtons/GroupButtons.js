import React from "react";
import Button from "react-bootstrap/Button";
import "../GroupButtons/GroupButtons.scss";

export default function GroupButtons(props) {
  const { handleChange, clicked, buttons, filterKey } = props;
  const handleClick = (e) => {
    console.log(e.target.value);
    //@param -> clicked is an array comming from parent state [0]
    if (!clicked.some((click) => click === e.target.value)) {
      e.target.classList.add("btn-clicked");
      handleChange(filterKey, [...clicked, e.target.value]);
    } else {
      e.target.classList.remove("btn-clicked");
      handleChange(
        filterKey,
        clicked.filter((item) => item !== e.target.value)
      ); // [0,1,3] --> [0,3]
    }
  };
  return (
    <>
      <div onClick={handleClick}>
        {Object.keys(buttons).map((button, i) => (
          <Button
            key={`button-group-${i}`}
            variant="outline-primary"
            value={button}
            onClick={handleClick}
          >
            {buttons[button]}
          </Button>
        ))}
      </div>
    </>
  );
}
