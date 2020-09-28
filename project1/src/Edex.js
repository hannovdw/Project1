import React from "react";
import "./App.css"


function Edex(){
  return(
    <div className = "paragraph">
        <h1 className = "head">Education</h1>
        <h2><u>Secondary Education</u> </h2>
        <h3>Hartbeespoort Highschool</h3>
        <p>Passed matric – December 2016 (National Senior Certificate
        attached) </p>
        <h2><u>Tertiary Education</u> </h2>
        <p>
        Final year Bachelors of Science in Information Technology(BSc
        IT)student at the North West University. Anticipated year of completion :
        2020.(Attatched is a page with all subjects passed and all subjects
        currently busy with)
        </p>
        <h2><u>Work Experience</u> </h2>
        <ul className="list">
          <li>WAITER (2015) Worked at Frenchtoast Koffie Kafee as a waiter.
          Contact person: Paul Kruger 082 441 0095 </li>
          <li>ARTIFLEX ENGINEERING (2018) Worked at Artiflex engineering
          company for 6 weeks as a part-time job holiday work Contact person:
          Elrissa Craig 012 664 4885. </li>
          <li>JUST SOLVE (2019) Job shadowing/work experience at JustSolve
          software development company.</li>
        </ul>



    </div>
  );
}

export default Edex;