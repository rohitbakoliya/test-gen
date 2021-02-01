import Random from '../helper/Random';
import SuffleArray from './ShuffleArray';

export interface PermutationParams {
  minSize: number;
  maxSize: number;
}

export interface PermutationReturns {
  output: string;
  size: number;
  result: Array<number>;
}

export type PermutationType = (permutationParams: PermutationParams) => PermutationReturns;

/**
 * Generates permutation of numbers from 1 to N
 * @param permuationParam
 *
 * `minSize` - minimum size of permutation
 *
 *  `maxSize` - maximum size of permutation
 */

const RndPermutation: PermutationType = ({ minSize, maxSize }) => {
  const rndSize = Random({ max: maxSize, min: minSize });
  let permutation = new Array(rndSize);
  let output = rndSize + '\n';
  for (let i = 1; i <= rndSize; i++) {
    permutation[i - 1] = i;
  }
  permutation = SuffleArray(permutation);

  permutation.forEach(function (x) {
    output += x + ' ';
  });
  output += '\n';

  return {
    output,
    result: permutation,
    size: rndSize,
  };
};

export default RndPermutation;
