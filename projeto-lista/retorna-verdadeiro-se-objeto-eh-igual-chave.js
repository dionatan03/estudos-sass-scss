let objeto1 = {
  a: 1,
  b: 2,
  c: 3,
};

let objeto2 = {
  x: "a",
  y: "b",
  z: "c",
};

let objeto3 = {
  x: "a",
  y: "b",
  z: undefined,
};

function isKeyExists(a, b) {
  return a.hasOwnProperty(b);
}

console.log(isKeyExists(objeto1, "b"));
console.log(isKeyExists(objeto2, "a"));
console.log(isKeyExists(objeto3, "z"));
