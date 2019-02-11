import React from "react";

function Header () {
    return (
        <div className="row pt-3 pr-2 border-bottom">
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h1 className="text-center">Clicky Game</h1>
            </div>
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h1 className="text-center">You guessed </h1>
            </div>
            <div className="col-md-4 pt-1 pb-2 text-center" id="title">
                <h1 className="text-center">Score: | High Score:  </h1>
            </div>
        </div>
    )
}

export default Header;