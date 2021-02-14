import { Switch, Route } from "react-router-dom";
import React from "react";
import ROUTES from "./utils/routes";
import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import PropertyDetails from "./components/common/PropertyDetails/PropertyDetails";

export default function App() {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <div className="app">
          <Login />
        </div>
      </Route>
      <Route path={ROUTES.SIGNUP} exact>
        <div className="app">
          <Signup />
        </div>
      </Route>
      <Route path={ROUTES.MAIN} exact>
        <div className="app">
          <Main />
        </div>
      </Route>
      <Route path={ROUTES.DETAIL} exact>
        <PropertyDetails />
      </Route>
    </Switch>
  );
}
