import React from "react";
import Home from "./Home";
import Work from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch, Redirect } from "react-router-dom";
function MainContentContainer(props) {
  return (
    <Switch>
      <Route
        path="/home"
        render={(props) => {
          return <Home props={props} />;
        }}
      ></Route>
      <Route
        path="/projects"
        render={(props) => {
          return <Work props={props} />;
        }}
      ></Route>
      <Route
        path="/about"
        render={(props) => {
          return <About props={props} />;
        }}
      ></Route>
      <Route
        path="/contact"
        render={(props) => {
          return <Contact props={props} />;
        }}
      ></Route>
      <Redirect to="/home" />
    </Switch>
  );
}

export default MainContentContainer;
