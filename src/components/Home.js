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
              <img className="entryImg" src={zoeimg} alt="zoe" />
              <div className="descriptionContainer">
                <p>
                  Hi, my name is Zoe Brandt, and I'm a Full-Stack Web developer
                  from Fresno, California.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="entryItem">
          <h3>About Me</h3>{" "}
          <div classNames="doubleContainer, bee">
            {/* <img className="entryImg" src={zoeimg} alt="rocks" /> */}

            <div className="descriptionContainer">
              <p className="about">
                My journey in web and software development started in 2011, when
                I took computer science courses in Java, Web development, and
                Android app development. After facing my own struggles with
                impostor syndrome, I decided to study Nursing. During my time as
                a Nursing student, I realized that I wanted to leave a positive
                impact on the world using scalable code-based solutions instead
                of relying solely on hands-on skills. Since then I've gotten
                back into development with more passion and enthusiasm than ever
                before.
              </p>
            </div>
            {/* <img className="entryImg" src={zoeimg} alt="rocks" /> */}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
