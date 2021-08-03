import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Profile from "./Components/Profile";

import "./css/app.css"

const App = () => {
  return (
    <div className="container">
      <Switch>
        {/*<Route exact path="/login" component={Login} />*/}
        <Route component={Header} />
      </Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:id" component={Profile} />

    </div>
  );
}

export default App;