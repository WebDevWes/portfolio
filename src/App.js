import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import OSexp from "./pages/OSexp";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Portfolio} exact />
          <Route path="/OSexp" component={OSexp} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
