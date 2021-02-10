import { Switch, Route } from "react-router-dom"; 
import React from "react"; 
import ROUTES from "./utils/routes"; 
import Main from './components/pages/Main/Main'; 
import PropertyDetails from './components/common/PropertyDetails/PropertyDetails';
import HeaderComponent from './components/common/HeaderComponent/HeaderComponent'; 
import "./App.css";
import ReactDOM from "react-dom";
import HomeOfficeToggle from "./components/common/HomeOfficeToggle/HomeOfficeToggle";
import Property from "./components/common/Property/Property";



function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };

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
          <HomeOfficeToggle toggled={toggled} onClick={handleClick} />
          <HeaderComponent />
          <Property/>

        </div>
      </Route>
    </Switch>
  );
}

export default App;
