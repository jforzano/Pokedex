import React from 'react';

function PokemonTypeSelect(props) {

  return (
    <select name={props.name} onChange={(e) => props.setter(e.target.value)}>
      <option value='Normal'>Normal</option>
      <option value='Fire'>Fire</option>
      <option value='Water'>Water</option>
      <option value='Grass'>Grass</option>
      <option value='Electric'>Electric</option>
      <option value='Ice'>Ice</option>
      <option value='Fighting '>Fighting </option>
      <option value='Poison'>Poison</option>
      <option value='Ground'>Ground</option>
      <option value='Flying'>Flying</option>
      <option value='Psychic'>Psychic</option>
      <option value='Bug'>Bug</option>
      <option value='Rock'>Rock</option>
      <option value='Ghost'>Ghost</option>
      <option value='Dark'>Dark</option>
      <option value='Dragon'>Dragon</option>
      <option value='Steel'>Steel</option>
      <option value='Fairy'>Fairy</option>
    </select>
 );
}

export default PokemonTypeSelect;