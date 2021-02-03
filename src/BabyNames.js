import babyNamesData from './babyNamesData.json';
import React, {useState} from 'react';
import girl from './images/girl.png';
import boy from './images/boy.png';

// let sortedNames = [];

const BabyNames = () => {
  // return RenderNames (sortedNames);
  let filtered = [];
  const [input, setInput] = useState ('');
  const [sortedNames, setSortedNames] = useState (babyNamesData);

  const sortArray = arr => {
    let temp;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].name < arr[i].name) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
  };

  sortArray (babyNamesData);
  // setSortedNames (babyNamesData);
  // console.log (babyNamesData);

  const changeHandler = e => {
    e.preventDefault ();
    let key = e.target.value;
    setInput (key);
    // console.log ('key=', key);
    console.log ('input', input);
    //}

    // if (input.length > 0) {
    filtered = babyNamesData.filter (item => {
      return item.name.toLocaleLowerCase ().match (key);
    });
    setSortedNames (filtered);
    // RenderNames (filtered);
    // }
  };

  const girlsNames = e => {
    let girlsOnly = [];
    e.preventDefault ();
    girlsOnly = babyNamesData.filter (item => {
      return item.sex === 'f';
    });
    setSortedNames (girlsOnly);
  };
  const boysNames = e => {
    let boysOnly = [];
    e.preventDefault ();
    boysOnly = babyNamesData.filter (item => {
      return item.sex === 'm';
    });
    setSortedNames (boysOnly);
  };

  return (
    <div className="container">
      <div className="search">
        <div className="searchBar">
          <label>Search </label>
          <input
            type="text"
            className="searchBox"
            value={input}
            onChange={changeHandler}
            placeholder="SEARCH HERE ..."
          />
        </div>
        <div>
          {/* <label>GIRLS NAMES</label> */}
          <img
            class="gender"
            src={girl}
            alt="girls names"
            onClick={girlsNames}
          />
          {/* <label>BOYS NAMES</label> */}

          <img class="gender" src={boy} alt="boys names" onClick={boysNames} />
        </div>
      </div>
      {sortedNames.map (item => {
        return item.sex === 'f'
          ? <div className="balloon2"><h2 id="names1">{item.name}</h2></div>
          : <div className="balloon" id="names1">
              <h2 id="names">{item.name}</h2>
            </div>;
      })}

    </div>
  );
};

// const sortNames = () => {
//   let temp;
//   for (let i = 0; i < sortedNames.length; i++) {
//     for (let j = i + 1; j < sortedNames.length; j++) {
//       if (sortedNames[j].name < sortedNames[i].name) {
//         temp = sortedNames[j];
//         sortedNames[j] = sortedNames[i];
//         sortedNames[i] = temp;
//       }
//     }
//   }
// };

export default BabyNames;
