import React from "react";

//content images
import sweetEats from "../images/sweet-eats.png";
import userInterface from "../images/ui-1.png";
import studybookImg from "../images/marketing-page.png";

import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

function Work(props) {
  return (
    <div className="pageContainer">
      <div className="pageTitle">Work</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Product: Studybook - A Clinical Trial Recruitment App</h3>

          <span class="image main">
            <img className="entryImg" src={studybookImg} alt="" />
          </span>
          <div className="descriptionContainer">
            <p>
              In this project, our team was tasked with creating the front-end
              design scheme based on illustrations provided by our UX design
              team. We were able to achieve near pixel-perfect recreation, which
              resulted in something I'm really proud of.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>User-Interface 1: Innovation On Demand</h3>

          <span class="image main">
            <img className="entryImg" src={userInterface} alt="" />
          </span>
          <div className="descriptionContainer">
            <p>
              This assignment was one of the first that incorporated hosting on
              github. The instructions were to replicate the design file as
              closely as possible, while utilizing the skills and best-practices
              we had been studying.
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>User-Interface 2: Sweet Eats Bakery</h3>

          <span class="image main">
            <img className="entryImg" src={sweetEats} alt="" />
          </span>
          <div className="descriptionContainer">
            <p>
              While one of the earlier assignments, the Sweet Eats project was a
              very fun introductory exercise in CSS styling. Successfully
              drafting a website based off of a design document was very
              rewarding!
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>User-Interface 2: Sweet Eats Bakery</h3>

          <span class="image main">
            <img className="entryImg" src={sweetEats} alt="" />
          </span>
          <div className="descriptionContainer">
            <p>
              While one of the earlier assignments, the Sweet Eats project was a
              very fun introductory exercise in CSS styling. Successfully
              drafting a website based off of a design document was very
              rewarding!
            </p>
          </div>
        </div>
        <div className="entryItem">
          <h3>User-Interface 2: Sweet Eats Bakery</h3>

          <span class="image main">
            <img className="entryImg" src={sweetEats} alt="" />
          </span>
          <div className="descriptionContainer">
            <p>
              While one of the earlier assignments, the Sweet Eats project was a
              very fun introductory exercise in CSS styling. Successfully
              drafting a website based off of a design document was very
              rewarding!
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Work;
