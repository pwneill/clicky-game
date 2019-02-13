import React from "react";
import "./jumbotronStyle.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Clicky Game!</h1>
        <p className="lead text-center">
          Click any politicain to earn points. But be careful not to click the same one twice!
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
