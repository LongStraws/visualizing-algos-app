export function getInsertionSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;

  let n = arr.length;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    animations.push([i, i]);
    /* Move elements of arr[0..i-1], that are  
      greater than key, to one position ahead  
      of their current position */
    while (j >= 0 && arr[j] > key) {
      animations.push([i, j]);
      arr[j + 1] = arr[j];
      j = j - 1;

      //animations.push([i, j]);
    }
    arr[j + 1] = key;
  }

  return animations;
}
