import React from "react";
import "./App.css"
import {Link} from 'react-router-dom';


function Nav(){
  return(
    <div>
      <h1 className="header">Cirriculum Vitae</h1>
      <p className="butback">
      <Link to="/">
      <button className="btn">Home</button>
      </Link>
      <Link to="/about">
      <button className="btn">About Me</button>
      </Link>
      <Link to="/qualifications">
      <button className="btn">Documents</button>
      </Link>
      <Link to="/education">
      <button className="btn">Education</button>
      </Link>
      <Link to="/hobbies">
      <button className="btn">Tech used</button>
      </Link>
      <Link to="/api">
      <button className="btn">API</button>
      </Link>
      </p>
    </div>
  );
}

export default Nav;