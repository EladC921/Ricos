import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Messages from "./Components/Messages";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";

import "./css/app.css";
import RecipeForm from "./Components/RecipeForm";

const App = () => {
  return (
    <div className="container">
      <Switch>
        {/*<Route exact path="/login" component={Login} />*/}
        <Route component={Header} />
      </Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/test" component={RecipeForm} />
    </div>
  );
};

export default App;
