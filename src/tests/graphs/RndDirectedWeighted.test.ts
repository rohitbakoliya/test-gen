import RndDirectedWeighted from '../../logic/graphs/RndDirectedWeighted';

describe('Random Generated Directed Unweighted Graph Tests', () => {
  const N = 101;
  const E = 550;
  const minWt = 10;
  const maxWt = 1000;
  const wtEdges = RndDirectedWeighted({
    nodesRange: [N, N],
    edgesRange: [E, E],
    wtRange: [minWt, maxWt],
  });

  test('should return exact E edges', () => {
    expect(wtEdges).toBeArray();
    expect(wtEdges).toBeArrayOfSize(E);
  });

  test('should return correct nodes values i.e [1,N]', () => {
    expect(wtEdges).toSatisfyAll(
      pairs => pairs[0] >= 1 && pairs[0] <= N && pairs[1] >= 1 && pairs[1] <= N
    );
  });

  test('should not contain any self loop', () => {
    expect(wtEdges).toSatisfyAll(pairs => pairs[0] !== pairs[1]);
  });

  test('should not contain any parallel edge', () => {
    const edgeSet: Set<string> = new Set();
    wtEdges.forEach(edge => {
      const [u, v] = edge;
      edgeSet.add(`${u},${v}`);
    });
    expect(edgeSet.size).toEqual(E);
  });

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
