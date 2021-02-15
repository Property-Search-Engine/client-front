import { React } from "react";

import "./HomeOfficeToggle.scss";

export default function HomeOfficeToggle({ toggled, onClick }) {
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
