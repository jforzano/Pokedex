import React from 'react';
import Searchbar from './Searchbar.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemonInfo: null};
  }

  fetchPokemonInfo(pokemonName) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({pokemonInfo: result}));
  }
  

  render() {
    return (
      <>
        <div className="App">
          <Searchbar getPokemonInfo={(pokemonName) => this.fetchPokemonInfo(pokemonName)}/>
        </div>
        { this.state.pokemonInfo && 
          <div>
            <img src={this.state.pokemonInfo.sprites.front_default}></img>
          </div>
        }     
      </>
    );
  }
}

export default App;
