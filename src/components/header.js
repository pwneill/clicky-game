import React from "react";

function Header (props) {
    return (
        <div className="row pt-3 pr-2 border-bottom">
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h3 className="text-center">Clicky Game</h3>
            </div>
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h3 className="text-center">{props.message}</h3>
            </div>
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h3 className="text-center">Score: {props.score} | High Score:  {props.bestScore}</h3>
            </div>
        </div>
    )
}

export default Header;