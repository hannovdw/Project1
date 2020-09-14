import React from "react";
import "./App.css"
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";



function Home(){
  return(
    <div className="app">
          <h1 className="head">Hanno Van der walt</h1>
          <p>Cell: 0823054581</p>
          <h3>BSc.I.T</h3>
          <img src = {Pic} alt="Pic" height="300" width="205" className="image" />
          <api/>
    </div>
  );
}

export default Home;