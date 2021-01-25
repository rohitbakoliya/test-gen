/**
 * Randomly re-arrange the array elements
 */
const SuffleArray = (arr: Array<any>): Array<any> => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
export default SuffleArray;
