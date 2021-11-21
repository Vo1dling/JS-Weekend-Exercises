const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let num2 = num.filter((num) => num >= 5);

num.forEach(function (n) {
  console.log(n + 1);
});

let num4 = num.map(function (n) {
  return n * 2;
});
console.log(num);
console.log(num2);

console.log(num4);
