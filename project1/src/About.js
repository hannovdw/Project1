import React from "react";
import "./App.css"


function About(){
  return(
    <div className= "paragraph">
        <h1 className="head">About Me</h1>
        <h2><u>Culture</u></h2>
          <p>
              I have been taking music lessons in guitar, electrical guitar and
              drum. I also play the ukulele and keyboard. I like composing my
              own tunes and jamming with friends. </p>
        <h2><u>Hobbies</u></h2>
          <p>
          Scuba diving, cycling, kayak and canoeing, fishing, computer
          games, Technology, camping and hiking, listening to music, flying
          model airplanes as well as reading books and broadening my
          knowledge of everything around me.
          </p>
        <h2><u>Sports</u></h2>
          <p>
            <ul className="list" >
              <li>Mountain Biking – School Team</li>
              <li>Scuba Diving (Open Water Qualification)</li>
              <li>Swimming – School Team</li>
              <li>Cross Country running – School Team</li>
              <li>Athletics - Hurdles and High Jump – Inter-High athletics every year.</li>
              <li>North West University canoe club.</li>

            </ul>
          </p>
        <h2><u>Conclusion</u></h2>
        <p>
        I am a creative person who likes
new challenges and new
experiences. I can perform well
under pressure and focus on the
matter at hand even in a crisis
situation. I have been told that I
am an “out of the box” thinker.
I can quickly discern what the
cause of a problem is and identify
the solution. I like being part of a
team and relationships are
important to me.
I am a quick learner and
challenges and new knowledge is
always welcome to me
I have big dreams and have
every intention to make them
come true …
        </p>

    </div>
  );
}

export default About;