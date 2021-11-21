function longest(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  s1 = Array.from(s1);
  s2 = Array.from(s2);
  s1 = s1.sort();
  s2 = s2.sort();
  let str = new Set(s1 + s2);
  result = Array.from(str);
  result = result.toString();
  const regex = /,/gi;
  result = result.replace(regex, "");
  console.log(result);
}
a = "asdasdasdtvtyhas";
b = "hihnrobhnjsuihoz";
longest(a, b);
