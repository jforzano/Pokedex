import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard.js';
import Searchbar from './Searchbar.js';
import SortNav from './SortNav.js';
import {SORT} from './constants.js'; 
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

  function getNumericSortFuncFor(property, isInverse) {
    if (isInverse) return (a, b) => a[property] - b[property];
    return (a, b) => b[property] - a[property];
  }

  function sortBy(val) {
    let sortedList = [...pokeDataList];
    if (val === SORT.ID) {
      sortedList.sort(getNumericSortFuncFor('id', true));
    } else if (val === SORT.NAME) {
      sortedList.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      });
    } else if (val === SORT.ATTACK) {
      sortedList.sort(getNumericSortFuncFor('attack'));
    } else if (val === SORT.DEFENSE) {
      sortedList.sort(getNumericSortFuncFor('defense'));
    } else {
      throw new Error('Trying to sort with an unhandled sort type');
    }

    setDisplayList(sortedList);
  }


  return (
    <>
    <header>
      <h1>Pokédex</h1> 
    </header>

    <Searchbar search={search}/>
    <SortNav sortBy={sortBy}/>

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
