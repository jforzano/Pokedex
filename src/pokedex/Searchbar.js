import React, {useState} from 'react';

function Searchbar(props) {

  const [searchVal, setSearchVal] = useState('');

  function handleClick(e) {
    e.preventDefault();
    props.search(searchVal)
  }

  return(
    <form>
      <input 
        type="text" 
        placeholder="Search for a pokemon" 
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}

export default Searchbar;