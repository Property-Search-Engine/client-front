import { Switch, Route } from "react-router-dom";
import React from "react";
import ROUTES from "./utils/routes";
import Main from "./components/pages/Main/Main";
import PropertyDetails from "./components/common/PropertyDetails/PropertyDetails";
import HeaderComponent from "./components/common/HeaderComponent/HeaderComponent";
import ReactDOM from "react-dom";
import HomeOfficeToggle from "./components/common/HomeOfficeToggle/HomeOfficeToggle";
import Property from "./components/common/Property/Property";
import Login from "./components/common/Login/Login";
import Search from "./components/common/Search/Search";
import Filters from "./components/common/Filters/Filters";

export default function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };

  return (
    <Switch>
      <Route path={ROUTES.PROPERTY} exact>
        <div className="app">
          {/* <HomeOfficeToggle toggled={toggled} onClick={handleClick} />
          <HeaderComponent />
          <Property /> */}
          <Login />
          <PropertyDetails />
        </div>
      </Route>
      <Route path={ROUTES.MAIN} exact>
        <div className="app">
          <HeaderComponent />
          <Search />
          <Main />
        </div>
      </Route>
      <Route path={ROUTES.TEST} exact>
        <div className="app">
          <Filters />
        </div>
      </Route>
    </Switch>
  );
}
