import { Switch, Route } from "react-router-dom"; 
import './App.css';
import React from "react"; 
import ROUTES from "./utils/routes"; 
import ReactDOM from "react-dom";
import HeaderComponent from "./components/common/HeaderComponent/HeaderComponent";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
       {/*<div>THIS IS THE MAIN PAGE</div>*/} 
        <HeaderComponent />
      </Route>
    </Switch>
  )
}

export default App;
