// Implement following array methods

// find
// filter
// map
// every
// some
// findIndex
// forEach

// 1. Use find method

const arr1 = [6, 14, 9, 112, 40];

function find(arr1) {
  for (const el of arr1) {
    if (el > 10) {
      return el;
    }
  }
  return undefined;
}
console.log(find(arr1));

// 2. Use filter method

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        subArray.push(arr[i]);
      }
    }
    newArr.push(subArray);
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 8, 3],
      [2, 5, 3],
      [3, 11, 20],
      [11, 3, 8],
    ],
    4
  )
);

// 3. Use map method.

// 4. Use every method.

function every(array, el, i) {
  let isPositive = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return (isPositive = false);
    }
  }
  return true;
}
console.log(every([1, 45, 33, 10, 95]));

// 5. Use some method

function some(array, el, i) {
  let isEven = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      return (isEven = true);
    }
  }
  return false;
}
console.log(some([3, 5, 11, 1, 6]));

// 6. Use findIndex method

function findIndex(array, el, i) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([3, 5, 11, 1, 7], 11));

// 7. Use forEach method

// 8. Use reduce method
