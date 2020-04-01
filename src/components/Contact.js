import React from "react";

import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

function Contact(props) {
  return (
    <div className="pageContainer">
      <div className="pageTitle">Contact</div>
      <div className="contentContainer">
        <div className="entryItem">
          <h3>I like making thing</h3>
          <p>
            Cow pepper jack danish fontina. Swiss cheesecake edam emmental
            cheese on toast bocconcini everyone loves lancashire. Hard cheese
            port-salut taleggio parmesan jarlsberg fromage frais melted cheese
            halloumi. Hard cheese cheese on toast edam rubber cheese gouda
            mascarpone when the cheese comes out everybody's happy red
            leicester. Squirty cheese port-salut caerphilly cheesecake manchego
            mascarpone danish fontina smelly cheese. Mascarpone cheesecake
            dolcelatte cheesy feet stilton queso pecorino cheese slices.
            Emmental melted cheese cheesy feet who moved my cheese babybel
            cauliflower cheese cheddar stilton. Parmesan jarlsberg paneer cheese
            strings cheese and biscuits camembert de normandie.
          </p>
        </div>

        <div className="entryItem">
          <h3>SITES 4 TH WRLD</h3>
          <p>
            Brie the big cheese roquefort. Chalk and cheese who moved my cheese
            babybel roquefort melted cheese cheese and wine stinking bishop
            mozzarella. Jarlsberg pepper jack bocconcini parmesan swiss cheese
            slices dolcelatte stinking bishop. Brie cheesy feet chalk and cheese
            camembert de normandie cheesy grin stinking bishop red leicester
            edam. Cheeseburger lancashire caerphilly feta macaroni cheese
            stinking bishop swiss cream cheese. When the cheese comes out
            everybody's happy melted cheese cheese triangles the big cheese hard
            cheese cheesy grin brie lancashire. Stilton say cheese when the
            cheese comes out everybody's happy cauliflower cheese swiss blue
            castello red leicester taleggio. Brie mascarpone.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default Contact;
