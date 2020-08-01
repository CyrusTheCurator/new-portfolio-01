import React from "react";
import joshImg from "../images/JoshIntro.png";
import rocksImg from "../images/rocks.png";

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
                  developer currently based in Fresno, California. I host my
                  portfolio here where I will provide frequent updates on my
                  latest projects and career status! (You can check out my
                  portfolio details{" "}
                  <Link className="workLink" to="/projects">
                    here
                  </Link>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="entryItem">
          <h3>Intro</h3>{" "}
          <div className="doubleContainer">
            <div className="singleContainer">
              <img className="entryImg" src={rocksImg} alt="Rocks" />
              <div className="descriptionContainer">
                <p>
                  My background with computer science originated in high school.
                  I took several courses in HTML/CSS, Java, and game
                  development. After 6 years of studying and working in
                  healthcare, I can't seem to want to do anything else other
                  than code! I am very grateful to Lambda that I can attend
                  their course and gain valuable skills.
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
