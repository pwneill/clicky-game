import React from 'react';
// import './App.css';
import candidates from "./candidates.json";
import Container from "./components/container";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import CandidateCard from "./components/card";


class App extends React.Component {

  state = {
    candidates
  };

    // Map over this.state.friends and render a CandidateCard component for each candidate object
    render() {
      return (
        // <Container>
          <Header>
            <Jumbotron>
              {this.state.candidates.map(candidate => (
                <CandidateCard
                  id={candidate.id}
                  key={candidate.id}
                  name={candidate.name}
                  image={candidate.image}
                />
              ))}
            </Jumbotron>
          </Header>
      );
    };
  };
  
  export default App;