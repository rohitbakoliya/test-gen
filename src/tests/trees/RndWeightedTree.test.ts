import RndWeightedTree from '../../logic/trees/RndWeightedTree';

describe('Random Generated unweighted Tree Tests', () => {
  const nodesRange: [number, number] = [100, 500];
  const minWt = 10;
  const maxWt = 1000;
  const { result: wtEdges } = RndWeightedTree({ nodesRange, wtRange: [minWt, maxWt] });
  test('should return each edge with size 3', () => {
    wtEdges.forEach(edge => {
      expect(edge).toBeArrayOfSize(3);
    });
  });
  test('should return weight in range [minWt, maxWt]', () => {
    wtEdges.forEach(edge => {
      expect(edge[2]).toBeWithin(minWt, maxWt + 1);
    });
  });
});
