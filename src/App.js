import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/main/Home';
import Login from './pages/Login';
import Profile from "./pages/main/Profile";
import Order from "./pages/main/Order";
import Landing from "./pages/Landing";
import InsertAddress from "./pages/InsertAddress";
import About from "./pages/main/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Landing/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/order">
            <Order/>
          </Route>

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/insertaddress">
            <InsertAddress/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
