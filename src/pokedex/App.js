import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard.js';
import Searchbar from './Searchbar.js';
import './App.css';

const DATA_SOURCE = 'https://raw.githubusercontent.com/praxis-labs/external-interview-prompts/main/pokedex-builder/pokedex.json';

function App() {

  let [pokeDataList, setPokeData] = useState([]);
  let [displayList, setDisplayList] = useState([]);

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
        setDisplayList(result);
      });
  }, []);

  function search(searchVal) {
    if (!searchVal) setDisplayList(pokeDataList)
    searchVal = searchVal.toLowerCase();

    const fuzzyMatches = pokeDataList.filter( (pokemon) => {
      return pokemon.name.toLowerCase().includes(searchVal);
    });
    
    setDisplayList(fuzzyMatches);
  }


  return (
    <>
    <header>
      <h1>Pokédex</h1> 
    </header>

    <Searchbar search={search}/>

    <main role="main">
      <ul>
        {displayList.length > 0 && 
          displayList.map((data) => <PokemonCard key={data.id} {...data} />)
        }
      </ul>
    </main>

    </>
  );

}

export default App;
