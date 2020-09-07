import React from "react";
import Tweet from "./tweet";
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";

function App(){
  return(
    <div className="app">
      <h1 className="header">Cirriculum Vitae</h1>
      <img src = {Pic} alt="Pic" height="300" width="205" />
      <Tweet />
      <button className="button">About Me</button>
      <button className="button">Quilifications</button>
      <button className="button">Hobbies</button>

    </div>
  );
}

export default App;
