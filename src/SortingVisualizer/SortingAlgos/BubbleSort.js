export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        animations.push([i - 1, i]);
        animations.push([i - 1, i]);
        swapped = true;
      }
    }
  } while (swapped);

  //console.log(animations);
  return animations;
}
