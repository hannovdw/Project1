import React from "react";
import QuoteAPI from "./QuoteAPI";
import Twitter from "./Twitter";
import GitAPI from "./GitAPI";

function ApiMain(){
  return(
    <div className = "paragraph">
        <h1 className = "head">API Page</h1>
        <h3 className="heading">Quote Of the day retrieved with REST API in JSON format: </h3>
        <QuoteAPI/>
        <Twitter/>
        <h3 className="heading">GITHUB Most recent repository data retrieved using GITHUB REST API:</h3>
        <GitAPI/>

    </div>
  );
}

export default ApiMain;