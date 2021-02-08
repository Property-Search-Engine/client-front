import { Switch, Route } from 'react-router-dom';
import ROUTES from './utils/routes';

import Search from './components/common/Search/Search';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN}>
        <div className="app">
          <Search />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
