import React from 'react';
import {SORT} from './constants.js'; 

function SortNav(props) {

  return(
    <>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" name="sort" onChange={(e) => props.sortBy(e.target.value)}>
        <option value={SORT.ID}>ID</option>
        <option value={SORT.NAME}>Name</option>
        <option value={SORT.ATTACK}>Attack</option>
        <option value={SORT.DEFENSE}>Defense</option>
      </select>
    </>
  );
}

export default SortNav;