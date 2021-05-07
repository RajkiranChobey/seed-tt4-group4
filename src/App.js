import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from "react-router-dom";

//Components
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Logout" component={Logout}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
