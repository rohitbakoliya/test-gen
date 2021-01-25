import Random from '../helper/Random';
import RndPermutation from '../logic/RndPermutation';

describe('Permutation Array tests', () => {
  const N = Random({ min: 1, max: 20 });
  const result = RndPermutation(N);
  test('should return array of size N', () => {
    expect(result).toBeArray();
    expect(result).toBeArrayOfSize(N);
  });
  test('array elements should be in range [1,N]', () => {
    expect(result).toSatisfyAll(ele => ele >= 1 && ele <= N);
  });
});
