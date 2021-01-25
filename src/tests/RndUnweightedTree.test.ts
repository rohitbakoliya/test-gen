import Random from '../helper/Random';
import TreeCheck from '../helper/TreeCheck';
import RndUnweightedTree from '../logic/trees/RndUnweightedTree';

describe('Random Generated unweighted Tree Tests', () => {
  const N = Random({ min: 10, max: 50 });
  const edges = RndUnweightedTree(N);
  const tCheck = new TreeCheck(N, edges);

  test('should return N-1 edges', () => {
    expect(edges).toBeArray();
    expect(edges).toBeArrayOfSize(N - 1);
  });

  test('should return correct nodes values i.e [1,N]', () => {
    expect(edges).toSatisfyAll(
      pairs => pairs[0] >= 1 && pairs[0] <= N && pairs[1] >= 1 && pairs[1] <= N
    );
  });

  test('tree should be connected', () => {
    expect(tCheck.isConntected()).toBeTrue();
  });

  test('tree should not have any cycle', () => {
    expect(tCheck.haveCycle).toBeFalse();
  });
});
