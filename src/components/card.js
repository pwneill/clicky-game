import React from "react";
import "./cardStyle.css";

function CandidateCard (props) {
    return (
      <div className="card text-center col-auto mt-4 ml-5 mr-5">
        <div onClick={() => props.handleClick(props.id)} className="card-body">
          <img
            id={props.id}
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>
    );
  }


export default CandidateCard;
