function isIsogram(string) {
  string = string.toLowerCase();
  let strArray = Array.from(string);
  let count = {};
  strArray.forEach(function (s) {
    if (count[s]) count[s]++;
    else count[s] = 1;
  });
  let arr = Array.from(Object.values(count));
  console.log(arr.every((letter) => letter <= 1));
}
isIsogram("dsaa");
