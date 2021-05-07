import "./App.css";
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
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/BuySellAsset" component={ViewTransaction}></Route>
          <Route
            exact
            path="/TransactionHistory"
            component={ViewAccountDetails}
          ></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route exact path="/UserInfo" component={AddTransaction}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
