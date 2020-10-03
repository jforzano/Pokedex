import React, {useState, useEffect} from 'react';
// import './App.css';


function PokemonCard(props) {


  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <div>ID#{props.id}</div>
      <div>Type: {props.type}</div>
      <div>HP: {props.hp}</div>
      <div>Attack: {props.attack}</div>
      <div>Defense: {props.defense}</div>
    </li>
  );

}

export default PokemonCard;
