import React from "react";
import CardBody from "./cardBody"

class Card extends React.Component {
    state = {
        clicked: false
    };

    isClicked = () => {
        this.setState({ clicked: true })
    }

    render() {
        return (
            <div className="card text-center">
            <div className="card-header bg-primary text-white">
              Click Counter!
            </div>
            <CardBody
              clicked={this.state.clicked}
            />
          </div>    
        )
    }

}    

export default Card;