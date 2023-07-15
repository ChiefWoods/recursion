function fibs(n) {
  if (n <= 0) return [];
  let arr = [];
  let a = 0;
  let b = 1;
  let c;
  for (let i = 0; i < n; i++) {
    arr.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  return arr;
}

function fibsRec(n) {
  if (n <= 0) return [];
  let arr = [];
  function main(x) {
    return x < 2 ? x : main(x - 1) + main(x - 2);
  }
  for (let j = 0; j < n; j++) {
    arr.push(main(j));
  }
  return arr;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
