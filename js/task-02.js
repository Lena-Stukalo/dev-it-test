function* chunkArray(arr, chunkSize) {
  let index = 0;

  while (index < arr.length) {
    yield arr.slice(index, index + chunkSize);
    index += chunkSize;
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
