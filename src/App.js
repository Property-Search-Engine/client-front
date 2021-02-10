import { Switch, Route } from "react-router-dom"; 
import React from "react"; 
import ROUTES from "./utils/routes"; 
import Main from './components/pages/Main/Main'; 
import PropertyDetails from './components/common/PropertyDetails/PropertyDetails';
import HeaderComponent from './components/common/HeaderComponent/HeaderComponent'; 


function App() {

  return (
    <Switch>
      <Route path={ROUTES.PROPERTY} exact>
        <div className="app">
          <PropertyDetails/>
        </div>
      </Route>
      <Route path={ROUTES.MAIN} exact>
        <div className="app">
          <HeaderComponent/>
          <Main/>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
