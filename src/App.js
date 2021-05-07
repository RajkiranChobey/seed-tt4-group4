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
import NavBar from "./Components/NavBar";
import userSession from "./Components/userSession";
import ViewAccountDetails from "./Components/ViewAccountDetails";
import ViewTransaction from "./Components/ViewTransaction";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Logout" component={Logout}></Route>
          <Route exact path="/NavBar" component={NavBar}></Route>
          <Route exact path="/userSession" component={userSession}></Route>
          <Route
            exact
            path="/ViewAccountDetails"
            component={ViewAccountDetails}
          ></Route>
          <Route
            exact
            path="/ViewTransaction"
            component={ViewTransaction}
          ></Route>
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
