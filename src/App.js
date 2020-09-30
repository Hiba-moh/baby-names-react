import React from 'react';
import './App.css';
import BabyNames from './BabyNames';
import SearchBox from './SearchBox';

function App () {
  return (
    <div className="App">
      <div class="search">
        <SearchBox />
      </div>

      <div class="names">
        <BabyNames />
      </div>

    </div>
  );
}

export default App;
