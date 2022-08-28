import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from './pages/AsideBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Switch>
      <Route path="/" component={ AsideBar } />
      <Route path="/home" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
    </Switch>
  );
}

export default App;
