const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};
function mapObject(obj, parentKey = "") {
  let result = "";

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}/${key}` : key;

      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        // Рекурсивно викликаємо функцію для вкладеного об'єкта
        const nestedResult = mapObject(obj[key], newKey);
        result = result + nestedResult;
      } else {
        // Додаємо значення до карти
        result = result + newKey + ":" + JSON.stringify(obj[key]) + "\n";
      }
    }
  }

  return result;
}
console.log(mapObject(obj));

// Outputs: {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }
