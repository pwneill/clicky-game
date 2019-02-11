import React, { Component } from 'react';
import './App.css';
import candidates from "./candidates.json"
import Wrapper from "./components/container"
import Header from "./components/header"
import Jumbotron from "./components/jumbotron"
import CandidateCard from "./components/card"


class App extends Component {

  state = {
    candidates
  }

  removeCandidate = id => {
    // Filter this.state.candidates for candidates with an id not equal to the id being removed
    const candidates = this.state.candidates.filter(candidate => candidate.id !== id);
    // Set this.state.candidates equal to the new candidates array
    this.setState({ candidates });
  };


    // Map over this.state.friends and render a CandidateCard component for each candidate object
    render() {
      return (
        <Wrapper>
          <Header />
          <Jumbotron />
          {this.state.candidate.map(candidate => (
            <CandidateCard
              removeCandidate={this.removeCandidate}
              id={candidate.id}
              key={candidate.id}
              name={candidate.name}
              image={candidate.image}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default App;