import React from 'react';
// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// styles
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/:movieId">
        <Movie />
      </Route>
      <Route exact path="/*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </Router>
);

export default App;