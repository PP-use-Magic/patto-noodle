import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/main/Home';
import Login from './pages/Login';
import Profile from "./pages/main/Profile";
import Order from "./pages/main/Order";
import Wallet from "./pages/main/Wallet";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <Router>
        <Switch>

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

          <Route path="/wallet">
            <Wallet/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
