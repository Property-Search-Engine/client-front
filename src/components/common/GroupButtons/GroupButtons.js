import React from "react";
import Button from "react-bootstrap/Button";

import "../GroupButtons/GroupButtons.scss";

export default function GroupButtons(props) {
  const { handleChange, clicked, buttons, filterKey } = props;
  const handleClick = (e) => {
    if (!clicked.some((click) => click === e.target.value)) {
      e.target.classList.add("btn-clicked");
      handleChange(filterKey, [...clicked, e.target.value]);
    } else {
      e.target.classList.remove("btn-clicked");
      handleChange(
        filterKey,
        clicked.filter((item) => item !== e.target.value)
      );
    }
  };

  return (
    <>
      <div className="buttonGroup" onClick={handleClick}>
        {Object.keys(buttons).map((button, i) => (
          <Button
            key={`button-group-${i}`}
            variant="outline-primary"
            value={button}
            onClick={handleClick}
            className={
              clicked.some((click) => click === button)
                ? "mr-2 btn-clicked"
                : "mr-2"
            }
          >
            {buttons[button]}
          </Button>
        ))}
      </div>
    </>
  );
}
