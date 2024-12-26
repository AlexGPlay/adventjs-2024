/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const countGifts = (gifts) => {
    return gifts.reduce((countMap, gift) => {
      countMap[gift] = (countMap[gift] || 0) + 1;
      return countMap;
    }, {});
  };

  const receivedCount = countGifts(received);
  const expectedCount = countGifts(expected);

  const missing = {};
  const extra = {};

  for (const [gift, count] of Object.entries(expectedCount)) {
    const receivedGiftCount = receivedCount[gift] || 0;
    if (receivedGiftCount < count) {
      missing[gift] = count - receivedGiftCount;
    }
  }

  for (const [gift, count] of Object.entries(receivedCount)) {
    const expectedGiftCount = expectedCount[gift] || 0;
    if (expectedGiftCount < count) {
      extra[gift] = count - expectedGiftCount;
    }
  }

  return { missing, extra };
}
