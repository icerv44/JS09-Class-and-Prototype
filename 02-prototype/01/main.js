Array.prototype.max = function (val) {
  // console.log(val);
  return Math.max(...val);
};

Array.prototype.sum = function (val) {
  //console.log(val);
  let sum = 0;
  for (let i of val) {
    sum += i;
  }
  return sum;
};

let arr = [1, 2, 3, 5, 9, 6];

console.log(Array.prototype.max(arr));
console.log(Array.prototype.sum(arr));
