import React from "react";
// import './App.css';
import candidates from "./candidates.json";
// import Container from "./components/container";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import CandidateCard from "./components/card";

class App extends React.Component {
  state = {
    candidates,
    score: 0,
    bestScore: 0,
    clicked: [],
    message: "Welcome!"
  };

  shuffleArray = arr =>
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

  checkScore() {
    var newScore = this.state.score;
    if (newScore >= this.state.bestScore) {
      this.setState({ score: (newScore + 1) });
      this.setState({ bestScore: (newScore + 1) });
    } else {
      this.setState({ score: (newScore + 1) });
    }
  }

  clickCard = id => {
    if (this.state.clicked.includes(id)) {
      console.log("yes", id)
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      this.setState({message: "You Guessed Incorrectly!"})
    } else {
      console.log("no", id)
      let clickedArr = [...this.state.clicked, id];
      this.setState({ clicked: clickedArr });
      this.setState({message: "You Guessed Correctly!"})
      this.checkScore();
    }
    //check if in array
    // if not in array, get id and push into array
    // then update score
    // if score > bestScore
    // bestScore = score
    //"you guessed correctly"
    // if in array, "you done fucked up son"
    // set score to 0
    // set clicked to []
    // both cases, re-render page in random order
  };

  // Map over this.state.friends and render a CandidateCard component for each candidate object
  render() {
    return (
      <div className="container-fluid">
        <Header 
        score={this.state.score}
        bestScore={this.state.bestScore}
        message={this.state.message}
        />
        <Jumbotron />
        <div className="row pl-2 pr-2">
          {this.state.candidates.map(candidate => (
            <CandidateCard
              key={candidate.id}
              id={candidate.id}
              name={candidate.name}
              image={candidate.image}
              handleClick={this.clickCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
