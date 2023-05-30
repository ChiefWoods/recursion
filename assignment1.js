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

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
