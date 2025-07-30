/**
 * Пошук k-го найменшого елемента за допомогою QuickSelect
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function quickSelect(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error("Некоректне значення k");
  }

  function select(array, k) {
    const pivot = array[Math.floor(Math.random() * array.length)];
    const lows = array.filter((x) => x < pivot);
    const highs = array.filter((x) => x > pivot);
    const pivots = array.filter((x) => x === pivot);

    if (k <= lows.length) return select(lows, k);
    else if (k <= lows.length + pivots.length) return pivot;
    else return select(highs, k - lows.length - pivots.length);
  }

  return select(arr, k);
}

// === Приклад запуску ===
const testArray = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = quickSelect(testArray, k);
console.log(`${k}-й найменший елемент: ${result}`);

// === Експорт для тестів ===
module.exports = { quickSelect };
