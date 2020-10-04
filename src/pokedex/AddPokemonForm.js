import React, {useState} from 'react';
import PokemonTypeSelect from './PokemonTypeSelect.js';

function AddPokemonForm(props) {

  const [showForm, setShowForm] = useState(false);

  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [type1, setType1] = useState('Normal');
  const [type2, setType2] = useState('Normal');
  const [hp, setHP] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');


  function handleClick(e) {
    e.preventDefault();
    props.addPokemon({
      id, 
      name, 
      type: `${type1}, ${type2}`,
      hp, 
      attack, 
      defense
    });
    setShowForm(!showForm);
  }

  return(
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add New Pokémon</button>
      {showForm && 
        <form>
          <div>
            <label htmlFor="pokemonID">ID:</label>
            <input type="text" name="pokemonID" onChange={(e) => setID(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="type1">First Type:</label>
            <PokemonTypeSelect name={'type1'} setter={setType1} />
            <label htmlFor="type2">Second Type:</label>
            <PokemonTypeSelect name={'type2'} setter={setType2} />
          </div>
          <div>
            <label htmlFor="hp">HP:</label>
            <input type="text" name="hp" onChange={(e) => setHP(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="attack">Attack:</label>
            <input type="text" name="attack" onChange={(e) => setAttack(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="defense">Defense:</label>
            <input type="text" name="defense" onChange={(e) => setDefense(e.target.value)}/>
          </div>
          <button onClick={handleClick}>Save</button>
        </form>
      }
    </div>
  );
}

export default AddPokemonForm;