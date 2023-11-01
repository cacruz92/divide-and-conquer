function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr,num);
    if(firstIdx === -1){return firstIdx};

    let lastIdx = findLast(arr,num);
    return lastIdx-firstIdx + 1;
}

function findFirst(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
        let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2)
        if ((midIdx === 0 || num > arr[midIdx - 1]) && arr[midIdx] === num) {
          return midIdx;
        }elseif(num > arr[midIdx]){
            findFirst(arr, num, midIdx + 1, highIdx)
        } else {
            findFirst(arr, num, lowIdx, midIdx-1)
        }
    }
    return-1
}

function findLast(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
        let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2)
        if ((midIdx === arr.length-1 || num < arr[midIdx + 1]) && arr[midIdx] === num) {
          return midIdx;
        }elseif(num < arr[midIdx]){
            findLast(arr, num, lowIdx, midIdx - 1)
        } else {
            findLast(arr, num, midIdx+1, highIdx)
        }
    }
    return-1
}

module.exports = sortedFrequency

