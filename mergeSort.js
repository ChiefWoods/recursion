function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let median = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, median);
  let rightHalf = arr.slice(median);
  let leftResult = mergeSort(leftHalf);
  let rightResult = mergeSort(rightHalf);

  return merge(leftResult, rightResult);
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] > rightArr[rightIndex]) {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    } else {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

console.log(mergeSort([591, 50, 699, 629, 893])); // [50, 591, 629, 699, 893]
console.log(mergeSort([389, 111, 829, 817, 254, 804])); // [111, 254, 389, 804, 817, 829]
