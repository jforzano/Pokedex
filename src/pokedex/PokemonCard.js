import React from 'react';
// import './App.css';


function PokemonCard(props) {


  return (
    <li>
      <h2>{props.name}</h2>
      <div>ID#{props.id}</div>
      <div>Type: {props.type}</div>
      <div>HP: {props.hp}</div>
      <div>Attack: {props.attack}</div>
      <div>Defense: {props.defense}</div>
      <button onClick={() => props.deletePokemon(props.id)}>Delete</button>
    </li>
  );

}

export default PokemonCard;
