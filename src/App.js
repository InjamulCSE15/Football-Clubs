
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ClubDetail from './Components/ClubDetail/ClubDetail';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/club/:teamId">
          <ClubDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
