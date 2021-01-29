import RndDirectedUnweighted from '../../logic/graphs/RndDirectedUnweighted';

describe('Random Generated Directed Unweighted Graph Tests', () => {
  const N = 100;
  const E = 507;
  const edges = RndDirectedUnweighted({ nodesRange: [N, N], edgesRange: [E, E] });

  test('should return exact E edges', () => {
    expect(edges).toBeArray();
    expect(edges).toBeArrayOfSize(E);
  });

  test('should return correct nodes values i.e [1,N]', () => {
    expect(edges).toSatisfyAll(
      pairs => pairs[0] >= 1 && pairs[0] <= N && pairs[1] >= 1 && pairs[1] <= N
    );
  });

  test('should not contain any self loop', () => {
    expect(edges).toSatisfyAll(pairs => pairs[0] !== pairs[1]);
  });

  test('should not contain any parallel edge', () => {
    const edgeSet: Set<string> = new Set();
    edges.forEach(edge => {
      const [u, v] = edge;
      edgeSet.add(`${u},${v}`);
    });
    expect(edgeSet.size).toEqual(E);
  });
});
