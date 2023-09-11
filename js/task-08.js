function combos(num) {
  const result = [];

  function generateCombos(currentCombo, remainingNum) {
    if (remainingNum === 0) {
      result.push(currentCombo);
      return;
    }

    for (let i = 1; i <= remainingNum; i++) {
      if (
        currentCombo.length === 0 ||
        i >= currentCombo[currentCombo.length - 1]
      ) {
        const newCombo = [...currentCombo, i];
        generateCombos(newCombo, remainingNum - i);
      }
    }
  }

  generateCombos([], num);
  return result;
}

const num = 10;
const combinations = combos(num);
console.log(combinations);
