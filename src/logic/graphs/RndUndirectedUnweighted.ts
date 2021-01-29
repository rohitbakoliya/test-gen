import { Edge } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

export interface RndUndirectedUnWeightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
}

export type RndUndirectedUnWeightedType = (
  rndUndirectedUnWeightedParams: RndUndirectedUnWeightedParams
) => Edge;

/**
 * Generates Random undirected unweighted Graph
 * @returns edge set
 */
const RndUndirectedUnWeighted: RndUndirectedUnWeightedType = ({ nodesRange, edgesRange }) => {
  const nodes = Random({ max: nodesRange[1], min: nodesRange[0] });
  // max edges need to be fixed
  // i.e E = N * (N - 1) / 2
  const E = Random({ max: Math.min(edgesRange[1], (nodes * (nodes - 1)) / 2), min: edgesRange[0] });

  const uug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  // to find u, v pair
  const range = { min: 1, max: nodes };
  for (let i = 0; i < E; i++) {
    let u = Random(range);
    let v = Random(range);

    while (set.has(`${u},${v}`) || set.has(`${v},${u}`) || u === v) {
      u = Random(range);
      v = Random(range);
    }
    uug.addEdge(u, v);
    set.add(`${u},${v}`);
  }
  uug.suffleEdges();

  return uug.edges;
};
export default RndUndirectedUnWeighted;
