import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchForm from './components/SearchForm';
import BusDetails from './pages/BusDetails';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/bus/:id" component={BusDetails} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
