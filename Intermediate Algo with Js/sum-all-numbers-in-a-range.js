function sumAll(arr) {
  let sum = 0;
  for(let i=Math.min(...arr); i<= Math.max(...arr); i++)
  {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10]));