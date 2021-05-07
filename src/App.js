import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/ViewTransaction" component={ViewTransaction}></Route>
          <Route
            exact
            path="/ViewAccountDetails"
            component={ViewAccountDetails}
          ></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route
            exact
            path="/AddTransaction"
            component={AddTransaction}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
