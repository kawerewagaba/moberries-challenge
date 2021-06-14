import Home from "./views/Home";
import Error from "./views/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
);

export default routes;
