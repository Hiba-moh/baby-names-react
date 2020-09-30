import React from 'react';
import babyNamesData from './babyNamesData.json';

let sortedNames = babyNamesData;

const sortNames = () => {
  let temp;
  for (let i = 0; i < sortedNames.length; i++) {
    for (let j = i + 1; j < sortedNames.length; j++) {
      if (sortedNames[j].name < sortedNames[i].name) {
        temp = sortedNames[j];
        sortedNames[j] = sortedNames[i];
        sortedNames[i] = temp;
      }
    }
  }
};

const BabyNames = () => {
  sortNames ();
  return sortedNames.map (item => {
    return item.sex === 'f'
      ? <div class="balloon2"><h2 id="names1">{item.name}</h2></div>
      : <div class="balloon" id="names1"><h2 id="names">{item.name}</h2></div>;
  });
};

export default BabyNames;
