import React from "react";

//content images
import sweetEats from "../images/sweet-eats.png";
import userInterface from "../images/ui-1.png";
import studybookImg from "../images/marketing-page.png";
import sleepTracker from "../images/sleeptracker.png";
import lessSite from "../images/lessSite.jpg";
import spacewalkers from "../images/spacewalkers.png";

import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

function Work(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Josh Luscombe - 2020</h3>
      <div className="pageTitle">Work</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Sleep Tracker</h3>

          <span class="imgMain">
            <a href="https://front-end-gspwy4s0w.now.sh/" target="_blank">
              <img className="entryImg" src={sleepTracker} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This project allowed us to really flex our abilities; We
              incorporated our skills in React, preprocessors like LESS,
              team-based product development, HTTPS requests, and advanced state
              management to create a fully functional web app. In this case, our
              app tracks the sleep needs of a user based on recorded user data.
              That data is then run through a machine-learning model developed
              by our data-science team to produce the nightly recommended hours
              of sleep for the user.
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>Studybook - A Clinical Trial Recruitment App</h3>

          <span class="imgMain">
            <a
              href="https://bw-clinical-trials.github.io/Marketing-Page/"
              target="_blank"
            >
              <img className="entryImg" src={studybookImg} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              In this project, our team was tasked with creating a front-end
              design scheme based on illustrations provided by our UX design
              team. We were able to achieve near pixel-perfect recreation with
              responsive design, which resulted in something I'm really proud
              of.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>User-Interface 1: Innovation On Demand</h3>

          <span class="imgMain">
            <a href="https://front-end-gspwy4s0w.now.sh/" target="_blank">
              <img className="entryImg" src={userInterface} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This assignment was one of the first that incorporated hosting on
              github. The instructions were to replicate the design file as
              closely as possible, while utilizing the skills and best-practices
              we had been studying.
            </p>

            <p>Building websites is fun! It's love at first commit.</p>
          </div>
        </div>
        <div className="entryItem">
          <h3>User-Interface 2: Sweet Eats Bakery</h3>

          <span class="imgMain">
            <a>
              <img className="entryImg" src={sweetEats} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              While one of the earlier assignments, the Sweet Eats project was a
              very fun introductory exercise in CSS styling. Successfully
              drafting a website based off of a design document was very
              rewarding!
            </p>

            <p>
              Meticulously formatting page elements using the box model
              presented a challenge, but it also helped me to better understand
              block/inline-block flow.
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>Advanced CSS</h3>

          <span class="imgMain">
            <a href="https://front-end-gspwy4s0w.now.sh/" target="_blank">
              <img className="entryImg" src={spacewalkers} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This assignment focused primarily on demonstration of fundamental
              CSS concepts in practice, though I still believe it has a place on
              this portfolio for now.
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>Intro to Preprocessors</h3>

          <span class="imgMain">
            <a
              href="https://cyrusthecurator.github.io/Preprocessing-I/"
              target="_blank"
            >
              <img className="entryImg" src={lessSite} alt="" />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              After learning the essentials of HTML and CSS, we immediately
              began learning about preprocessors such as Less and Sass which
              empower developers to work faster, more effectively, and with more
              organized code. I had a lot of fun working on this project, and
              might return to it at a later time to make revisions.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Work;
