import React from "react";
import zoeimg from "../images/zoe_main.jpg";

function Home(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Zoe Brandt - 2020</h3>
      <div className="pageTitle">Home</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Welcome</h3>{" "}
          <div className="doubleContainer">
            <div className="singleContainer">
              <img className="entryImg" src={zoeimg} alt="rocks" />
              <div className="descriptionContainer">
                <p>
                  Hi, my name is Zoe Brandt, and I'm a Full-Stack Web developer
                  currently based in Fresno, California. You can visit my
                  Projects page for examples of my most recent work.
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
