import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./css/app.css"

const App = () => {
  return (
    <div className="container">
      <Switch>
        {/*<Route exact path="/login" component={Login} />*/}
        <Route component={Header} />
      </Switch>
      <Route exact path="/" component={Main} />

    </div>
  );
}

export default App;