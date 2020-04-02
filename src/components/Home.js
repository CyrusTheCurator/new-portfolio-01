import React from "react";
import joshImg from "../images/JoshIntro.png";
import rocksImg from "../images/rocks.png";

import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

function Home(props) {
  return (
    <div className="pageContainer">
      <h3 className="nameTitle">Josh Luscombe - 2020</h3>
      <div className="pageTitle">Home</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>Welcome</h3>{" "}
          <div className="doubleContainer">
            <div className="singleContainer">
              <img className="entryImg" src={joshImg} alt="Image Of Josh" />
              <div className="descriptionContainer">
                <p>
                  Hi, my name is Josh Luscombe, and I'm a full-stack web
                  developer currently based in Fresno, California. I host my
                  portfolio here where I will provide frequent updates on my
                  latest projects and career status! (You can check out my
                  portfolio details <Link to="/work">here</Link>)
                </p>
              </div>
            </div>
            <div className="singleContainer">
              <img className="entryImg" src={rocksImg} alt="Image Of Rocks" />
              <div className="descriptionContainer">
                <p>
                  My background with computer science originated in high school.
                  I took several courses in HTML/CSS, Java, and game
                  development. After 6 years of studying and working in
                  healthcare, I can't seem to want to do anything else other
                  than code! I am very grateful to Lambda that I can attend
                  their course and gain valuable skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="entryItem">
          <h3>I like making thing</h3>
          <div className="descriptionContainer">
            <p>
              Cow pepper jack danish fontina. Swiss cheesecake edam emmental
              cheese on toast bocconcini everyone loves lancashire. Hard cheese
              port-salut taleggio parmesan jarlsberg fromage frais melted cheese
              halloumi. Hard cheese cheese on toast edam rubber cheese gouda
              mascarpone when the cheese comes out everybody's happy red
              leicester. Squirty cheese port-salut caerphilly cheesecake
              manchego mascarpone danish fontina smelly cheese. Mascarpone
              cheesecake dolcelatte cheesy feet stilton queso pecorino cheese
              slices. Emmental melted cheese cheesy feet who moved my cheese
              babybel cauliflower cheese cheddar stilton. Parmesan jarlsberg
              paneer cheese strings cheese and biscuits camembert de normandie.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>SITES 4 TH WRLD</h3>
          <div className="descriptionContainer">
            <p>
              Brie the big cheese roquefort. Chalk and cheese who moved my
              cheese babybel roquefort melted cheese cheese and wine stinking
              bishop mozzarella. Jarlsberg pepper jack bocconcini parmesan swiss
              cheese slices dolcelatte stinking bishop. Brie cheesy feet chalk
              and cheese camembert de normandie cheesy grin stinking bishop red
              leicester edam. Cheeseburger lancashire caerphilly feta macaroni
              cheese stinking bishop swiss cream cheese. When the cheese comes
              out everybody's happy melted cheese cheese triangles the big
              cheese hard cheese cheesy grin brie lancashire. Stilton say cheese
              when the cheese comes out everybody's happy cauliflower cheese
              swiss blue castello red leicester taleggio. Brie mascarpone.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>Code for a greater good</h3>
          <div className="descriptionContainer">
            <p>
              Cut the cheese gouda squirty cheese. Everyone loves fondue
              port-salut the big cheese dolcelatte stilton red leicester fromage
              frais. Port-salut blue castello roquefort pecorino mozzarella
              danish fontina melted cheese ricotta. Mascarpone st. agur blue
              cheese goat cheddar everyone loves cheese and biscuits the big
              cheese cheese on toast. Gouda taleggio cheesy feet manchego
              squirty cheese queso rubber cheese taleggio. St. agur blue cheese
              stinking bishop cream cheese stilton cheese triangles rubber
              cheese taleggio monterey jack. Jarlsberg fromage the big cheese.
            </p>
          </div>
        </div>

        <div className="entryItem">
          <h3>Who writes this much about cheese?</h3>
          <div className="descriptionContainer">
            <p>
              Paneer goat cheeseburger. Red leicester emmental mozzarella when
              the cheese comes out everybody's happy say cheese caerphilly
              taleggio ricotta. Emmental red leicester fromage hard cheese feta
              danish fontina jarlsberg cream cheese. Cheesy grin cut the cheese
              everyone loves blue castello cheesy feet rubber cheese squirty
              cheese cream cheese. Stinking bishop the big cheese who moved my
              cheese cheese triangles mascarpone red leicester paneer cheese
              strings. Brie airedale smelly cheese bocconcini cow st. agur blue
              cheese roquefort roquefort. Manchego bavarian bergkase mozzarella
              cow cheesecake cheese triangles stilton.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
