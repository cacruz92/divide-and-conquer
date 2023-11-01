function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1){
        return 0};

    return arr.length - firstZero
  }
  
  function findFirst(arr, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
      let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2)
      if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
        return midIdx;
      } else if (arr[midIdx] === 1) {
        return findFirst(arr, midIdx + 1, highIdx)
      }
      return findFirst(arr, lowIdx, midIdx - 1)
    }
    return -1;
  }
  
  module.exports = countZeroes