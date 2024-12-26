/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  function generateSubsetsOfSize(gifts, size, start, currentSet, result) {
    if (currentSet.length === size) {
      result.push([...currentSet]);
      return;
    }

    for (let i = start; i < gifts.length; i++) {
      currentSet.push(gifts[i]);
      generateSubsetsOfSize(gifts, size, i + 1, currentSet, result);
      currentSet.pop();
    }
  }

  const giftSets = [];
  const n = gifts.length;

  for (let size = 1; size <= n; size++) {
    generateSubsetsOfSize(gifts, size, 0, [], giftSets);
  }

  return giftSets;
}
