import React from "react";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import { Route } from "react-router-dom";
function MainContentContainer(props) {
  return (
    <>
      <Route
        path="/home"
        render={props => {
          return <Home props={props} />;
        }}
      ></Route>
      <Route
        path="/work"
        render={props => {
          return <Work props={props} />;
        }}
      ></Route>
      <Route
        path="/about"
        render={props => {
          return <About props={props} />;
        }}
      ></Route>
      <Route
        path="/contact"
        render={props => {
          return <Contact props={props} />;
        }}
      ></Route>
    </>
  );
}

export default MainContentContainer;
