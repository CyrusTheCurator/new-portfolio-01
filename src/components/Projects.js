import React from "react";

//content images

import studybookImg from "../images/marketing-page.png";
import sleepTracker from "../images/sleeptracker.png";
import covidImg from "../images/covid19.png";
import medCabinet from "../images/med_cabinet.png";
import conway from "../images/conway.png";
// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

// import {
//   Route,
//   Link,
//   NavLink,
//   BrowserRouter as Router,
// } from "react-router-dom";

function Work(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Zoe Brandt - 2020</h3>
      <div className="pageTitle">Work</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Conway's Game of Life</h3> <p>A React.js implementation</p>
          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://hopeful-fermi-9eb3c2.netlify.app/"
              target="_blank"
            >
              <img alt="portfolio entry" className="entryImg" src={conway} />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This project is easily one of the most fun I've ever worked on.
              The Game of Life, also known simply as Life, is a cellular
              automaton devised by the British mathematician John Horton Conway
              in 1970. It is a zero-player game, meaning that its evolution is
              determined by its initial state, requiring no further input. My
              version here builds upon the basics by integrating an
              import-system that populates the board with patterns from the game
              of life lexicon.
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>Med Cabinet</h3> <p>A cannabis strain recommendation app</p>
          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://med-cabinet8.netlify.app/"
              target="_blank"
            >
              <img
                alt="portfolio entry"
                className="entryImg"
                src={medCabinet}
              />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              Med Cabinet is a cannabis strain recommendation platform developed
              with other students at lambda school. My primary responsibilities
              were to engineer the backend API and databases (users/passwords,
              strains), including parsing user input and passing it into the
              recommendation API. The Github respository for the backend can be
              found here:{" "}
              <a
                alt="link to portfolio entry Github Repository"
                rel="noopener noreferrer"
                href="https://github.com/CyrusTheCurator/Medcab_Backend"
                target="_blank"
              >
                Repository with API docs
              </a>
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>Studybook</h3> <p>A Clinical Trial Recruitment App</p>
          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://bw-clinical-trials.github.io/Marketing-Page/"
              target="_blank"
            >
              <img
                alt="portfolio entry"
                className="entryImg"
                src={studybookImg}
              />
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
          <h3>Sleep Tracker</h3>

          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://front-end-gspwy4s0w.now.sh/"
              target="_blank"
            >
              <img
                alt="portfolio entry"
                className="entryImg"
                src={sleepTracker}
              />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This project allowed us to really flex our abilities; We
              incorporated our skills in React, preprocessors like LESS, HTTPS
              requests, and advanced state management to create a fully
              functional web app. Our app tracks the sleep needs of a user based
              on recorded user data. That data is then run through a
              machine-learning model developed by our data-science team to
              produce the nightly recommended hours of sleep for the user.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>COVID-19 Data Tracker</h3>

          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://tender-payne-4705b5.netlify.app/"
            >
              <img alt="portfolio entry" className="entryImg" src={covidImg} />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This app performs a simple API call to a Covid-19 statistics API,
              populates the data dynamically into the app, and is styled using
              the Bulma css framework. I had a lot of fun styling this one and
              learning to implement HTTPS requests.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Work;
