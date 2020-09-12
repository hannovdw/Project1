import React from "react";
import "./App.css"
import Pic3 from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\ms.PNG";
import Pic4 from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\id.PNG";
import Pic5 from "C:\\Users\\baren\\Desktop\\Studies\\323\\Project1\\project1\\src\\ur.PNG";

function Qualy(){
  return(
    <div className ="paragraph">
        <h1 className = "head"><u>Documents</u></h1>
        <h2><u>Matric Certificate</u></h2>
        <img src = {Pic3} alt="Pic" height="700" width="500" className="image" />
        <p></p>
        <h2><u>Identification Document</u></h2>
        <img src = {Pic4} alt="Pic" height="250" width="450" className="image" />
        <h2><u>Academic Report</u></h2>
        <img src = {Pic5} alt="Pic" height="450" width="650" className="image" />

    </div>
  );
}

export default Qualy;