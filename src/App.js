import React from 'react';
import './App.css';
import BabyNames from './BabyNames';

function App () {
  return (
    <div className="App">
      {/* <div class="search">
        <SearchBox />
      </div> */}

      <div class="names" id="babysNames">
        <BabyNames />

      </div>

    </div>
  );
}

export default App;
