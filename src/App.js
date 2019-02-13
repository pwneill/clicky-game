import React from "react";
import candidates from "./candidates.json";
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

  componentWillMount() {
    this.shuffleArray(candidates)
  }

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ candidates: array })
  }

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
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      this.setState({message: "You Guessed Incorrectly!"})
      this.className({})
    } else {
      let clickedArr = [...this.state.clicked, id];
      this.shuffleArray(this.state.candidates); 
      this.setState({ clicked: clickedArr });
      this.setState({message: "You Guessed Correctly!"})
      this.checkScore();
    }
  };

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


// To do: 
// -- Fix shitty image quality
// -- add shake animation
// -- deploy! 