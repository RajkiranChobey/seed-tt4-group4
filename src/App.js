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
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
