import RndArray from '../logic/RndArray';

describe('Random array tests', () => {
  test('should return empty array', () => {
    const result = RndArray({ maxSize: 0, minSize: 0 });
    expect(result).toBeArray();
    expect(result).toBeArrayOfSize(0);
  });
  const minSize = 10;
  const maxSize = 10000;
  const result = RndArray({ minSize, maxSize, pattern: /Alice|Bob/ });
  test('Pattern => should return array of correct size', () => {
    expect(result).toBeArray();
    expect(result.length).toBeWithin(minSize, maxSize + 1);
  });
  test('Pattern => should return correct string', () => {
    result.forEach(s => {
      expect(s).toBeString();
      expect(s).toSatisfy(value => value === 'Alice' || value === 'Bob');
    });
  });

  const range: [number, number] = [-1000, 5000];
  const result1 = RndArray({ minSize, maxSize, range });
  test('Range => should return array of correct size', () => {
    expect(result1).toBeArray();
    expect(result.length).toBeWithin(minSize, maxSize + 1);
  });
  test('Range => should return correct numeric values', () => {
    result1.forEach(value => {
      expect(value).toBeNumber();
      expect(value).toBeWithin(range[0], range[1] + 1);
    });
  });
});
