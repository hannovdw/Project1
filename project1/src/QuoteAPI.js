import React from "react";

let quotefinal ="";


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
}



function QuoteAPI(){
  return(
    <div className ="paragraph">
        {getQuote()}

        <p>{quotefinal}</p>
    </div>
  );
}

export default QuoteAPI;