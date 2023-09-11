function add(num) {
  let sum = num;

  function innerAdd(nextNum) {
    sum += nextNum;
    return innerAdd;
  }

  innerAdd.valueOf = function () {
    return sum;
  };

  return innerAdd;
}

Number(add(1)(2)); // == 3
Number(add(1)(2)(5)); // == 8
Number(add(1)(2)(-3)(4)); //  == 4
Number(add(1)(2)(3)(4)(-5)); // == 5
