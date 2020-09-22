import React from "react";

let questions = [];

function QuoteApi(){
  return(
        get_quote_of_the_day()
  );
}

function get_quote_of_the_day() {
    fetch(
        'http://quotes.rest/qod.json'
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.contents.quotes.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.quote,
                };
                return formattedQuestion.question;
            });
        })
        .catch((err) => {
            console.error(err);
        });}                      

export default QuoteApi