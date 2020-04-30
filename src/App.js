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
        <div className="BgImg" />

        <MainContentContainer />
      </div>
    </Router>
  );
}

export default App;
