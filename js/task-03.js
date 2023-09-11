const f1 = (cb) => {
  return 1;
};
const f2 = (a, b) => {
  return b - a;
};
const f3 = (a, b, c) => {
  return [a, b, c];
};
const bulkRun = (arg) => {
  const resArr = [];
  const finalFun = (func, args) => {
    return func(...args);
  };
  for (let i = 0; i < arg.length; i++) {
    const res = finalFun(...arg[i]);
    resArr.push(res);
  }
  return resArr;
};

console.log(
  bulkRun([
    [f1, []],
    [f2, [2, 3]],
    [f3, [3, 4, 8]],
  ])
);
// Output: [1, 2, [3, 4]]
