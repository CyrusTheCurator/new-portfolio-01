import React from "react";

import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

function About(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Josh Luscombe - 2020</h3>
      <div className="pageTitle">About</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>About</h3>
          <p>TODO: Update About page</p>
        </div>
      </div>{" "}
    </div>
  );
}

export default About;
