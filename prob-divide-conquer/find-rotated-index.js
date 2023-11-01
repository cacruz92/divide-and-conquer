function findRotatedIndex(arr, num) {
      let pivotIdx = findPivot(arr);

      if (pivotIdx > 0 && num >= arr[0] && num <= arr[pivotIdx-1]){
        return binarySearch(arr,num, pivot, arr.length-1)
      } else { 
        return binarySearch(arr, num, pivotIdx, arr.length-1)
      }
}


function binarySearch(arr, num, leftIdx, rightIdx){
    if(arr.length === 0){
        return -1};
    if (num < arr[leftIdx] || num > arr[rightIdx]){
        return -1}
    
    while(leftIdx <= rightIdx){
      let middleIdx = Math.floor((leftIdx + rightIdx)/2);
      
      if (arr[middleIdx] === num){
        return middleIdx
      } elseif (arr[middleIdx] < num){
        leftIdx = middleIdx + 1;    
      } else {
        rightIdx = middleIdx-1;
      }
    }
    return -1
  }
  
function findPivot(arr){
    if(arr.length === 1 || arr[0] < arr[arr.lenght-1]){
        return 0
    }

    let leftIdx = 0
    let rightIdx = arr.length -1

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx+rightIdx)/2)

        if (arr[middleIdx] > arr [middleIdx+1]){
            return middleIdx + 1
        } elseif(arr[leftIdx] <= arr[middleIdx]){
            leftIdx = middleIdx + 1
        }else{
            rightIdx = middleIdx -1
        }
    }
}

module.exports = findRotatedIndex
