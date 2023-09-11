function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  let isError = false;
  while (!isError) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      console.log("catch", error);
      if (error.constructor === ErrorException) {
        isError = true;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
