import React from "react";
import SocialComponents from "./SocialComponents";

// import {
//   Route,
//   Link,
//   NavLink,
//   BrowserRouter as Router,
// } from "react-router-dom";

function Contact(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Zoe Brandt - 2020</h3>
      <div className="pageTitle">Contact</div>
      <div className="contentContainer">
        <div className="entryItem">
          <SocialComponents />
        </div>
      </div>
    </div>
  );
}

export default Contact;
