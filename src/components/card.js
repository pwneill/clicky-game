import React from "react";
import "./cardStyle.css";

function CandidateCard (props) {
    return (
      <div className="col-md-3 mt-4 ml-5 mr-5">
          <img onClick={() => props.handleClick(props.id)} className="img-responsive img-thumbnail"
            id={props.id}
            src={props.image}
            alt={props.name}
          />
      </div>
    );
  }


export default CandidateCard;
