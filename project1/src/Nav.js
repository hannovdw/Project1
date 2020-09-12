import React from "react";
import "./App.css"
import {Link} from 'react-router-dom';


function Nav(){
  return(
    <div>
      <h1 className="header">Cirriculum Vitae</h1>
      <Link to="/">
      <button className="button">Home</button>
      </Link>
      <Link to="/about">
      <button className="button">About Me</button>
      </Link>
      <Link to="/qualifications">
      <button className="button">Documents</button>
      </Link>
      <Link to="/hobbies">
      <button className="button">Hobbies</button>
      </Link>
    </div>
  );
}

export default Nav;