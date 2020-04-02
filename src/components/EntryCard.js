import React from "react";
import { NavLink } from "react-router-dom";
function EntryCard(props) {
  return (
    <div className="entryItem">
      {/* <h3>{itemTitle}</h3> */}

      <span class="imgMain">
        {/* <img className="entryImg" src={itemImg} alt="" /> */}
      </span>
      <div className="descriptionContainer">
        {/* <p>{itemDescription}</p> */}
      </div>
    </div>
  );
}

export default EntryCard;
