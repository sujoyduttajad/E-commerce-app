import React from "react";
import Home from './pages/Home';
import Result from './pages/Result';
import Product from './pages/Product';
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

  const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
