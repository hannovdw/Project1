import React from "react";
import "./App.css"


function Nav(){
  return(
    <div>
      <h1 className="header">Cirriculum Vitae</h1>
      <button className="button">Home</button>
      <button className="button">About Me</button>
      <button className="button">Quilifications</button>
      <button className="button">Hobbies</button>
    </div>
  );
}

export default Nav;