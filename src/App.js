import React from "react";
import Navbar from "./components/Navbar";
import MainContentContainer from "./components/MainContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
// import morroImg from "./images/z.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        {/* <img className="BgImg" src={morroImg} alt="Morro Bay" /> */}

        <MainContentContainer />
      </div>

      <footer>our footer goes here</footer>
    </Router>
  );
}

export default App;
