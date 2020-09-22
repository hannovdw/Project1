import React from "react";
import About from "./About";
import Hobbies from"./Hobbies";
import Nav from "./Nav";
import Qualy from "./Qualy";
import Edex from "./Edex";
import QuoteApi from "./QuoteApi";
import Api from "./api";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pic from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\pic.JPG";




function App(){
  return(
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
      <Route path= "/" exact component={Home} />
      <Route path= "/Project1" component={Home} />
      <Route path= "/hobbies" component={Hobbies} />
      <Route path= "/qualifications" component={Qualy} />
      <Route path= "/about" component={About} />
      <Route path= "/education" component={Edex} />

      </Switch>
    </div>
    </Router>
  );
}

let quotee = 'Find a purpose in life so big it will challenge every capacity to be at your best.';

function getQuote()
{
  let quote = '';
  let edited = '';
  let stringed = '';

  fetch('http://quotes.rest/qod.json')
  .then(function(response){
    return response.json();
  })
  .then(function(jquotes){
    quote = jquotes.contents.quotes[0].quote;
    edited = quote;
    return edited;
  })
  .then(function(quoteret){
    stringed = quoteret.toString();
    console.log(stringed);
    quotee = stringed;
    return stringed;
  })
  .catch((err) => {
    console.error(err);
  })
}


const Home = () => (
  
  <div className="app">
  <div className = "head">
  <h3>Hanno Van der walt</h3>
      <p>Cell: 0823054581</p>
  <h3>BSc.I.T</h3>
  </div>
<img src = {Pic} alt="Pic" height="300" width="205" className="homeimage" />
<h1>{getQuote()}</h1>
<p h1 className = "head">Daily API quote: {quotee}</p>
</div>
);

export default App;
