import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Product from "./pages/Product"
import Result from "./pages/Result"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
        <Route path='/:productId' component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
