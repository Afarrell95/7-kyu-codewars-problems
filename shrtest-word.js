// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let sArr = s.split(" ");
  let sortArr = sArr.sort((x, y) => x.length - y.length);
  return sortArr[0].length;
}
