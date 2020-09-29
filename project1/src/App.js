import React from "react";
import About from "./About";
import Hobbies from"./Hobbies";
import Nav from "./Nav";
import Qualy from "./Qualy";
import Edex from "./Edex";
import ApiMain from "./ApiMain";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";

let quotefinal ="";

function App(){
  return(
    
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
      <Route exact path= "/" component={Home} />
      <Route path= "/Project1/" component={Home} />
      <Route path= "/Project1" component={Home} />
      <Route path= "/hobbies" component={Hobbies} />
      <Route path= "/qualifications" component={Qualy} />
      <Route path= "/api" component={ApiMain} />
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
  <h1>Hanno Van der walt</h1>
  <h2>BSc.I.T</h2>
  <p>Cell: 0823054581</p>
  </div>
<img src = {Pic} alt="Picture" height="300" width="205" className="homeimage" />
<p className = "hiden">
<ApiMain/>
</p>
</div>
);

export default App;
