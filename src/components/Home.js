import React from "react";
import joshImg from "../images/JoshIntro.png";

import {
  // Route,
  Link,
  // NavLink,
  // BrowserRouter as Router,
} from "react-router-dom";

function Home(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Josh Luscombe - 2020</h3>
      <div className="pageTitle">Home</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Welcome</h3>{" "}
          <div className="doubleContainer">
            <div className="singleContainer">
              <img className="entryImg" src={joshImg} alt="Josh" />
              <div className="descriptionContainer">
                <p>
                  Hi, my name is Josh Luscombe, and I'm a full-stack web
                  developer currently based in Fresno, California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
