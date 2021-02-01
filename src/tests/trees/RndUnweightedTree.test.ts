import TreeCheck from '../../helper/TreeCheck';
import RndUnweightedTree from '../../logic/trees/RndUnweightedTree';

describe('Random Generated unweighted Tree Tests', () => {
  const nodesRange: [number, number] = [100, 500];
  const { result: edges, nodes } = RndUnweightedTree({ nodesRange });
  const tCheck = new TreeCheck(nodes, edges);

  test('should return N-1 edges', () => {
    expect(edges).toBeArray();
    expect(edges).toBeArrayOfSize(nodes - 1);
  });

  test('should return correct nodes values i.e [1,N]', () => {
    expect(edges).toSatisfyAll(
      pairs => pairs[0] >= 1 && pairs[0] <= nodes && pairs[1] >= 1 && pairs[1] <= nodes
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
    expect(edgeSet.size).toEqual(nodes - 1);
  });
  test('tree should be connected', () => {
    expect(tCheck.isConntected()).toBeTrue();
  });

  test('tree should not have any cycle', () => {
    expect(tCheck.haveCycle).toBeFalse();
  });
});
