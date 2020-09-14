import React from "react";
import About from "./About";
import Hobbies from"./Hobbies";
import Nav from "./Nav";
import Qualy from "./Qualy";
import Edex from "./Edex";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";




function App(){
  return(
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path= "/hobbies" component={Hobbies} />
      <Route path= "/qualifications" component={Qualy} />
      <Route path= "/about" component={About} />
      <Route path= "/education" component={Edex} />

      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className="app">
  <div className = "head">
  <h3>Hanno Van der walt</h3>
      <p>Cell: 0823054581</p>
  <h3>BSc.I.T</h3>
  </div>
<img src = {Pic} alt="Pic" height="300" width="205" className="image" />
<api/>
</div>
);

export default App;
