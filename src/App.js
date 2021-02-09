import { Switch, Route } from "react-router-dom"; 
// import './App.css';
import React from "react"; 
import ROUTES from "./utils/routes"; 
import Property from "./components/common/Property/Property";

function App() {

  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
        <div className="app">
          <Property/>
        </div>
      </Route>
    </Switch>
  )
}

export default App;
