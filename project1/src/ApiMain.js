import React from "react";
import QuoteAPI from "./QuoteAPI";

function ApiMain(){
  return(
    <div className = "paragraph">
        <h1 className = "head">API Page</h1>
        <h3>Quote Of the day retrieved with REST API in JSON format: </h3>
        <QuoteAPI/>

    </div>
  );
}

export default ApiMain;