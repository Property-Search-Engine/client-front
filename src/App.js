import { Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import ROUTES from "./utils/routes";
import ReactDOM from "react-dom";
import HomeOfficeToggle from "./components/common/HomeOfficeToggle/HomeOfficeToggle";
import Property from "./components/common/Property/Property";
import HeaderComponent from "./components/common/HeaderComponent/HeaderComponent";
import Login from "./components/common/Login/Login";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
        <div className="app">
          {/* <HomeOfficeToggle toggled={toggled} onClick={handleClick} />
          <HeaderComponent />
          <Property /> */}
          <Login />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
