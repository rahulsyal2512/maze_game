import React from "react";
import MazeRunner from "./MazeRunner";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MazeRunner} />
        <Route path="/completed" exact component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
