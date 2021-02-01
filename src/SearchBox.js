import React, {useState} from 'react';
import babyNamesData from './babyNamesData.json';
import RenderNames from './RenderNames';
import SortNames from './SortNames';

let sortedNames = babyNamesData;
SortNames (sortedNames);
let filtered = [];

const SearchBox = () => {
  const [input, setInput] = useState ('');

  const changeHandler = e => {
    e.preventDefault ();
    const key = e.target.value.toLowerCase ();
    setInput (key);
  };

  if (input.length > 0) {
    filtered = sortedNames.filter (item => {
      return item.name.toLocaleLowerCase ().match (input);
    });
    RenderNames (filtered);
  }

  return (
    <div class="searchBar">
      <label for="search">Search </label>
      <input
        type="text"
        value={input}
        class="searchBox"
        onChange={e => changeHandler (e)}
      />
    </div>
  );
};

export default SearchBox;
