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

  const findLetter = id => {
    let filterFirstLetter;
    filterFirstLetter = sortedNames.filter (item => {
      return item.name.charAt (0).toLocaleLowerCase () === id;
    });
    setSortedNames (filterFirstLetter);
  };
  const allNames = () => {
    setSortedNames (babyNamesData);
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
        <div className="allNames">
          {/* <label>GIRLS NAMES</label> */}
          <img
            class="gender"
            src={girl}
            alt="girls names"
            onClick={girlsNames}
          />
          {/* <label>BOYS NAMES</label> */}

          <img class="gender" src={boy} alt="boys names" onClick={boysNames} />
          <h3 onClick={allNames}>ALL</h3>
        </div>
        <div className="letters">
          <div
            className="oneLetter"
            id="a"
            onClick={e => findLetter (e.target.id)}
          >
            A
          </div>
          <div
            className="oneLetter"
            id="b"
            onClick={e => findLetter (e.target.id)}
          >
            B
          </div>
          <div
            className="oneLetter"
            id="c"
            onClick={e => findLetter (e.target.id)}
          >
            C
          </div>
          <div
            className="oneLetter"
            id="d"
            onClick={e => findLetter (e.target.id)}
          >
            D
          </div>
          <div
            className="oneLetter"
            id="e"
            onClick={e => findLetter (e.target.id)}
          >
            E
          </div>
          <div
            className="oneLetter"
            id="f"
            onClick={e => findLetter (e.target.id)}
          >
            F
          </div>
          <div
            className="oneLetter"
            id="g"
            onClick={e => findLetter (e.target.id)}
          >
            G
          </div>
          <div
            className="oneLetter"
            id="h"
            onClick={e => findLetter (e.target.id)}
          >
            H
          </div>
          <div
            className="oneLetter"
            id="i"
            onClick={e => findLetter (e.target.id)}
          >
            I
          </div>
          <div
            className="oneLetter"
            id="j"
            onClick={e => findLetter (e.target.id)}
          >
            J
          </div>
          <div
            className="oneLetter"
            id="k"
            onClick={e => findLetter (e.target.id)}
          >
            K
          </div>
          <div
            className="oneLetter"
            id="l"
            onClick={e => findLetter (e.target.id)}
          >
            L
          </div>
          <div
            className="oneLetter"
            id="m"
            onClick={e => findLetter (e.target.id)}
          >
            M
          </div>
          <div
            className="oneLetter"
            id="n"
            onClick={e => findLetter (e.target.id)}
          >
            N
          </div>
          <div
            className="oneLetter"
            id="o"
            onClick={e => findLetter (e.target.id)}
          >
            O
          </div>
          <div
            className="oneLetter"
            id="p"
            onClick={e => findLetter (e.target.id)}
          >
            P
          </div>
          <div
            className="oneLetter"
            id="q"
            onClick={e => findLetter (e.target.id)}
          >
            Q
          </div>
          <div
            className="oneLetter"
            id="r"
            onClick={e => findLetter (e.target.id)}
          >
            R
          </div>
          <div
            className="oneLetter"
            id="s"
            onClick={e => findLetter (e.target.id)}
          >
            S
          </div>
          <div
            className="oneLetter"
            id="t"
            onClick={e => findLetter (e.target.id)}
          >
            T
          </div>
          <div
            className="oneLetter"
            id="u"
            onClick={e => findLetter (e.target.id)}
          >
            U
          </div>
          <div
            className="oneLetter"
            id="v"
            onClick={e => findLetter (e.target.id)}
          >
            V
          </div>
          <div
            className="oneLetter"
            id="w"
            onClick={e => findLetter (e.target.id)}
          >
            W
          </div>
          <div
            className="oneLetter"
            id="x"
            onClick={e => findLetter (e.target.id)}
          >
            X
          </div>
          <div
            className="oneLetter"
            id="y"
            onClick={e => findLetter (e.target.id)}
          >
            Y
          </div>
          <div
            className="oneLetter"
            id="z"
            onClick={e => findLetter (e.target.id)}
          >
            Z
          </div>
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
