import React from "react";
import Tweet from "./tweet";
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";

function App(){
  return(
    <div className="app">
      <h1>Cirriculum Vitaeeee</h1>
      <img src = {Pic} alt="Pic" height="300" width="205" />
      <Tweet />
    </div>
  );
}

export default App;
