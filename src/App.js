import { Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import ROUTES from "./utils/routes";
import ReactDOM from "react-dom";
import HomeOfficeToggle from "./components/common/HomeOfficeToggle/HomeOfficeToggle";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
        <div className="app">
          <HomeOfficeToggle toggled={toggled} onClick={handleClick} />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
