import RndUndirectedUnWeighted from '../../logic/graphs/RndUndirectedUnweighted';

describe('Random Generated Undirected Unweighted Graph Tests', () => {
  const nodesRange: [number, number] = [100, 200];
  const edgesRange: [number, number] = [500, 1000];
  const { result, edges, nodes } = RndUndirectedUnWeighted({
    nodesRange,
    edgesRange,
  });

  test('should return edges', () => {
    expect(result).toBeArray();
  });

  test('nodes count should be in range', () => {
    expect(nodes).toBeWithin(nodesRange[0], nodesRange[1] + 1);
  });

  test('edges count should be in range', () => {
    expect(edges).toBeWithin(edgesRange[0], edgesRange[1] + 1);
  });

  test('max possible edges test', () => {
    expect(edges).toBeLessThanOrEqual((nodes * (nodes + 1)) / 2);
  });

  test('should return correct nodes values i.e [1,nodes]', () => {
    expect(result).toSatisfyAll(
      pairs => pairs[0] >= 1 && pairs[0] <= nodes && pairs[1] >= 1 && pairs[1] <= nodes
    );
  });

  test('should not contain any self loop', () => {
    expect(result).toSatisfyAll(pairs => pairs[0] !== pairs[1]);
  });

  test('should not contain any parallel edge', () => {
    const edgeSet: Set<string> = new Set();
    result.forEach(edge => {
      const [u, v] = edge;
      edgeSet.add(`${u},${v}`);
    });
    expect(edgeSet.size).toEqual(edges);
  });
});
