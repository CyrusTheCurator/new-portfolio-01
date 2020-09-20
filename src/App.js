import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContentContainer from "./components/MainContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
// import morroImg from "./images/z.jpg";

function App() {
  const [displayStatus, setDisplayStatus] = useState({
    visibility: "hidden",
    opacity: 0,
  });

  function showImage() {
    //alter state var for new css display rule
    setDisplayStatus({
      visibility: "visible",
      opacity: 1,
    });
  }

  useEffect(() => {
    showImage();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="blurBox" />
        {/* <div className="bgImgContainer">
          {" "}
          <div
            className="BgImg"
            style={{
              visibility: displayStatus.visibility,
              opacity: displayStatus.opacity,
            }}
          />
        </div> */}

        <MainContentContainer />
      </div>
    </Router>
  );
}

export default App;
