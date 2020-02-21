import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './custom.scss';
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import Projects from "./container/Projects/Projects";
import Team from "./container/Team/Team";
import Contact from "./container/Contact/Contact";
import Project from "./container/Project/Project";

export default function App() {
  return (
      <Router>
          <Header/>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}

