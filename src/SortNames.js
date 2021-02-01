const SortNames = props => {
  let temp;
  for (let i = 0; i < props.length; i++) {
    for (let j = i + 1; j < props.length; j++) {
      if (props[j].name < props[i].name) {
        temp = props[j];
        props[j] = props[i];
        props[i] = temp;
      }
    }
  }
  return props;
};

export default SortNames;
