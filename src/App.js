import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import './App.css';

function App() {
  return (
    <>
       <div className="container">
          <CurrentLocation />
          </div>
       <div className="footer-info">
          <a href="">
            Download Source Code
          </a>{" "}
          | Developed by{" "}
          <a target="_blank" href="https://www.linkedin.com/in/chayanrastogi88/">
            Chayan Rastogi
          </a>{" "}
        </div>
    </>
  );
}

export default App;
