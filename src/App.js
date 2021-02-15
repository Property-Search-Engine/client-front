import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import PropertyDetails from "./components/common/PropertyDetails/PropertyDetails";
import Results from "./components/pages/Results/Results";
import BookingForm from "./components/common/BookingForm/BookingForm";
import Bookings from "./components/common/Bookings/Bookings";


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
      <Route path={ROUTES.RESULTS} component={Results} exact />
      <Route path={ROUTES.BOOKINGS} exact>
        <BookingForm />
      </Route>
      <Route path={ROUTES.MY_BOOKINGS} exact>
        <Bookings />
      </Route>
    </Switch>
  );
}
