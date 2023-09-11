const deepEqual = (a, b) => {
  console.log(JSON.stringify(a) === JSON.stringify(b));
};

deepEqual({ name: "test" }, { name: "test" }); // output true
deepEqual({ name: "test" }, { name: "test1" }); // output false
deepEqual(
  { name: "test", data: { value: 1 } },
  { name: "test", data: { value: 2 } }
); // output false
deepEqual({ name: "test" }, { name: "test", age: 10 }); // false
