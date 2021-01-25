import RndArray from '../logic/RndArray';

describe('Random array tests', () => {
  test('should return empty array', () => {
    const result = RndArray({ dim: [0, 0] });
    expect(result).toBeArray();
    expect(result).toBeArrayOfSize(0);
  });
  const result = RndArray({ dim: [2, 10], pattern: /Alice|Bob/ });
  test('Pattern => should return array of correct size', () => {
    expect(result).toBeArray();
    expect(result).toBeArrayOfSize(2);
  });
  test('Pattern => should return correct array elements with correct size', () => {
    result.forEach(arr => {
      expect(arr).toBeArray();
      expect(arr).toBeArrayOfSize(10);
      expect(arr).toIncludeAllMembers(['Alice', 'Bob']);
    });
  });

  const result1 = RndArray({ dim: [20, 3], range: [-10, 50] });
  test('Range => should return array of correct size', () => {
    expect(result1).toBeArray();
    expect(result1).toBeArrayOfSize(20);
  });
  test('Range => should return correct array elements with correct size', () => {
    result1.forEach(arr => {
      expect(arr).toBeArray();
      expect(arr).toBeArrayOfSize(3);
      expect(arr).toSatisfyAll(ele => ele >= -10 && ele <= 50);
    });
  });
});
