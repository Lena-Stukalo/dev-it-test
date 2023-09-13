var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

const arrayToObject = (arr) => {
  const obj = {};
  if (arr.length === 0) {
    return {};
  }
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (Array.isArray(currentElement) && currentElement.length === 2) {
      const [key, value] = currentElement;
      obj[key] = Array.isArray(value) ? arrayToObject(value) : value;
    }
  }

  return obj;
};
const result = arrayToObject(arr);
console.log(result);
// Outputs: {
// name: 'developer',
// age: 5,
// skills: {
//   html: 4,
//   css: 5,
//   js: 5
// }
