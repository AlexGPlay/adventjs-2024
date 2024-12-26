/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const missingNumbers = [];

  const maxNumber = Math.max(...nums);
  for (let i = 1; i <= maxNumber; i++) {
    if (!nums.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}
