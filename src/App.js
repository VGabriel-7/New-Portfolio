import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from './pages/AsideBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import './style.css';

function App() {
  return (
    <>
      <AsideBar />
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact-me" component={ ContactMe } />
        <Route path="/" component={ Home } />
      </Switch>
    </>
  );
}

export default App;
