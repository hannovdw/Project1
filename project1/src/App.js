import React from "react";
import About from "./About";
import Hobbies from"./Hobbies";
import Nav from "./Nav";
import Qualy from "./Qualy";
import QuoteAPI from "./QuoteAPI";
import Twit from "./Twitter";
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


function getQuote()
{
  let quote = '';
  let edited = '';
  let stringed = '';

  fetch('https://quotes.rest/qod.json')
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
    setQuote(stringed);
    return stringed;

  })
  .catch((err) => {
    console.error(err);
  })
}

function setQuote(quote)
{
  quotefinal = quote;
  console.log(quotefinal);
}


const Home = () => (
  <div className="app">
  <div className = "head">
  <h3>Hanno Van der walt{getQuote()}</h3>
      <p>Cell: 0823054581</p>
  <h3>BSc.I.T</h3>
  </div>
  <p h1 className = "quote">Daily API quote: {quotefinal}</p>
<img src = {Pic} alt="Picture" height="300" width="205" className="homeimage" />
<Twit/>
<QuoteAPI/>
</div>
);

export default App;
