import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard.js';
import Searchbar from './Searchbar.js';
import './App.css';

const DATA_SOURCE = 'https://raw.githubusercontent.com/praxis-labs/external-interview-prompts/main/pokedex-builder/pokedex.json';

function App() {

  let [pokeDataList, setPokeData] = useState([]);

  useEffect(() => {
    fetch(DATA_SOURCE)
      .then(res => res.json())
      .then(result => {
        result = result.map((data) => {
          return {
            name: data.name.english,
            id: data.id,
            type: data.type.join(', '), 
            hp: data.base.HP,
            attack: data.base.Attack,
            defense: data.base.Defense
          };
        })
        setPokeData(result);
      });
  }, []);


  return (
    <>
    <header>
      <h1>Pokédex</h1> 
    </header>

    <main role="main">
      <p>This is my test paragraph.</p>
      <ul>
        {pokeDataList.length > 0 && 
          pokeDataList.map((data) => <PokemonCard {...data} />)
        }
      </ul>
    </main>

    </>
  );

}

export default App;
