import RndGrid from '../logic/RndGrid';

describe('Random array tests', () => {
  test('should return empty array', () => {
    const result = RndGrid({ minDim: [0, 0], maxDim: [0, 0] });
    expect(result).toBeArray();
    expect(result).toBeArrayOfSize(0);
  });
  const minDim: [number, number] = [2, 10];
  const maxDim: [number, number] = [100, 400];
  const result = RndGrid({ minDim, maxDim, pattern: /Alice|Bob/ });
  const size = result.length;
  test('Pattern => should return array of correct size', () => {
    expect(result).toBeArray();
    expect(size).toBeWithin(minDim[0], maxDim[0] + 1);
  });
  test('Pattern => should return correct array elements with correct size', () => {
    result.forEach(arr => {
      expect(arr).toBeArray();
      expect(arr.length).toBeWithin(minDim[1], maxDim[1] + 1);
      expect(arr.every(value => value === 'Bob' || value === 'Alice')).toBeTrue();
    });
  });

  const range: [number, number] = [-10, 50];
  const result1 = RndGrid({ minDim, maxDim, range });
  const size1 = result1.length;
  test('Range => should return array of correct size', () => {
    expect(result1).toBeArray();
    expect(size1).toBeWithin(minDim[0], maxDim[0] + 1);
  });
  test('Range => should return correct array elements with correct size', () => {
    result1.forEach(arr => {
      expect(arr).toBeArray();
      expect(arr.length).toBeWithin(minDim[1], maxDim[1] + 1);
      expect(arr.every(ele => ele >= range[0] && ele <= range[1])).toBeTrue();
    });
  });
});
