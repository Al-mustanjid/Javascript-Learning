const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [].concat(arr).sort((a,b)=>a-b)
  return newArr;
  // Only change code above this line
}

nonMutatingSort(globalArray);