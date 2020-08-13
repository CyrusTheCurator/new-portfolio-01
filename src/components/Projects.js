import React from "react";

//content images
import authFriends from "../images/authFriends.png";
import userInterface from "../images/ui-1.png";
import studybookImg from "../images/marketing-page.png";
import sleepTracker from "../images/sleeptracker.png";
import covidImg from "../images/covid19.png";
import spacewalkers from "../images/spacewalkers.png";
import medCabinet from "../images/med_cabinet.png";
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
      <h3 className="nameTitle">Josh Luscombe - 2020</h3>
      <div className="pageTitle">Work</div>
      <div className="contentContainer">
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
          <h3>Friends List</h3> <p>U: Josh, PW: joshcodes</p>
          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://auth-friends-nine.now.sh/login"
              target="_blank"
            >
              <img
                alt="portfolio entry"
                className="entryImg"
                src={authFriends}
              />
            </a>
          </span>
          <div className="descriptionContainer">
            <p>
              This project allowed us to independently work with and implement a
              full-stack deployment, with functioning back-end and front-end.
              Designed using React, registered users can log in, and are issued
              a verification token that is used to gain access to user-specific
              data hosted on the back-end server. This is technically my first
              full-stack-deployment, as bare-bones as it is for now.
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
          <h3>Studybook</h3> <p>- A Clinical Trial Recruitment App</p>
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
        <div className="entryItem">
          <h3>Advanced CSS</h3>

          <span class="imgMain">
            <a
              alt="link to portfolio entry"
              rel="noopener noreferrer"
              href="https://cyrusthecurator.github.io/Sprint-Challenge--Advanced-CSS/#"
              target="_blank"
            >
              <img
                alt="portfolio entry"
                className="entryImg"
                src={spacewalkers}
              />
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
          <h3>User-Interface 1: Innovation On Demand</h3>

          <span class="imgMain">
            <img
              alt="portfolio entry"
              className="entryImg"
              src={userInterface}
            />
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
      </div>{" "}
    </div>
  );
}

export default Work;
