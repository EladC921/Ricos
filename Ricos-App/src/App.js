import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Messages from "./Components/Messages";

import "./css/app.css";

const App = () => {
  const jwt = localStorage.getItem('jwt')
  if (!jwt)
    return <Route exact path="/*" component={Login} />
  else
    return (
      <div className="container">
        <Router>
          {/*<Switch>
          <Route exact path="/login" component={Login} />
          
        </Switch>*/}
          <Route component={Header} />
          <Route exact path="/" component={Main} />
          <Route exact path="/profile/:uid" component={Profile} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/chat" component={Messages} />
        </Router>
      </div>
    );
};

export default App;
