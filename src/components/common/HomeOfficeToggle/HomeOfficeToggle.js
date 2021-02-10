import { React, useState } from "react";
import "./HomeOfficeToggle.scss";

export default function HomeOfficeToggle({ toggled, onClick }) {
  const [toggle, setToggled] = useState(false);
  return (
    <>
      <div onClick={onClick} className={`toggle ${toggled ? "office" : ""}`}>
        <div className="notch"></div>
        <span className={`spanHome ${toggled ? "notToggled" : ""}`}>Home</span>
        <span className={`spanOffice ${toggled ? "" : "notToggled"}`}>
          Office
        </span>
      </div>
    </>
  );
}
