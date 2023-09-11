var obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
  app: {},
};
const objectToArray = (obj) => {
  const arr = [];
  if (Object.keys(obj).length === 0) {
    return [];
  }
  for (let key in obj) {
    const currentElement = obj[key];
    typeof currentElement === "object"
      ? arr.push([key, objectToArray(currentElement)])
      : arr.push([key, currentElement]);
  }

  return arr;
};
const result = objectToArray(obj);
console.log(result);
