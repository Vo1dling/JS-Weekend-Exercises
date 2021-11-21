function count(string) {
  string = string.toLowerCase();
  let strArray = Array.from(string);
  let count = {};
  strArray.forEach(function (s) {
    if (count[s]) count[s]++;
    else count[s] = 1;
  });
  let arr = Array.from(Object.values(count));
  arr = arr.filter((letter) => letter >= 2);
  console.log(arr.length);
}
count("dsassad");
