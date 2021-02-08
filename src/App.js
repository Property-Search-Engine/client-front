import { Switch, Route } from "react-router-dom"; 
import './App.css';
import React from "react"; 
import ROUTES from "./utils/routes"; 
import ImageCarousel from "./components/common/ImageCarousel/ImageCarousel";
import { propertyEx } from "./utils/mockOfProperties";

function App() {

  const property = propertyEx; 

  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
        <div className="app"><ImageCarousel  property={property}/></div>
      </Route>
    </Switch>
  )
}

export default App;
