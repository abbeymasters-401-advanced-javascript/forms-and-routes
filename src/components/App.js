import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import List from './List';
import Detail from './Detail';

export default function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path='character/:characterName' component={Detail}></Route>
            <Route path='list/:character' component={List}></Route>
            <Route exact path='/' component={Home}></Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}
