import RndPermutation from '../logic/RndPermutation';

describe('Permutation Array tests', () => {
  const params = {
    maxSize: 10000,
    minSize: 1,
  };
  const { result, size } = RndPermutation(params);
  test('should return array of size with in range[minSize,maxSize]', () => {
    expect(result).toBeArray();
    expect(size).toBeWithin(params.minSize, params.maxSize + 1);
  });
  test('array elements should be in range [1,N]', () => {
    expect(result).toSatisfyAll((ele: number) => ele >= 1 && ele <= size);
  });
});
