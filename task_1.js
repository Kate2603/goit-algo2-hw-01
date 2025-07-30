/**
 * Знаходить мінімум і максимум у масиві чисел методом "розділяй і володарюй"
 * @param {number[]} arr
 * @returns {[number, number]}
 */
function findMinMax(arr) {
  if (arr.length === 0) {
    throw new Error("Масив не повинен бути порожнім");
  }

  function helper(left, right) {
    if (left === right) return [arr[left], arr[left]];
    if (right - left === 1) {
      return arr[left] < arr[right]
        ? [arr[left], arr[right]]
        : [arr[right], arr[left]];
    }

    const mid = Math.floor((left + right) / 2);
    const [min1, max1] = helper(left, mid);
    const [min2, max2] = helper(mid + 1, right);

    return [Math.min(min1, min2), Math.max(max1, max2)];
  }

  return helper(0, arr.length - 1);
}

// === Приклад запуску ===
const testArray = [3, 1, 7, 4, 9, 0, 5];
const [min, max] = findMinMax(testArray);
console.log(`Мінімум: ${min}, Максимум: ${max}`);

// === Експорт для тестів ===
module.exports = { findMinMax };
