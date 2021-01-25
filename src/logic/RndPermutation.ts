import SuffleArray from './ShuffleArray';

/**
 * Generates permutation of numbers from 1 to N
 * @param {number} N maximum element in permutation
 */

const RndPermutation = (N: number): Array<number> => {
  let permutation = new Array(N);
  for (let i = 1; i <= N; i++) {
    permutation[i - 1] = i;
  }
  permutation = SuffleArray(permutation);
  return permutation;
};

export default RndPermutation;
