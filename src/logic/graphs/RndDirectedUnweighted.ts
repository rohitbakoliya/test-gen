import { Edge } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

export interface RndDirectedUnweightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
}

export type RndDirectedUnweightedType = (
  rndDirectedUnweightedParams: RndDirectedUnweightedParams
) => Edge;

/**
 * Generates Random directed unweighted Graph
 * @returns edge set
 */
const RndDirectedUnweighted: RndDirectedUnweightedType = ({ nodesRange, edgesRange }) => {
  const nodes = Random({ max: nodesRange[1], min: nodesRange[0] });
  // max edges need to be fixed
  // i.e E = N * (N - 1) / 2
  const E = Random({ max: Math.min(edgesRange[1], (nodes * (nodes - 1)) / 2), min: edgesRange[0] });

  const dug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  const range = { min: 1, max: nodes };
  for (let i = 0; i < E; i++) {
    let u = Random(range);
    let v = Random(range);

    while (set.has(`${u},${v}`) || u === v) {
      u = Random(range);
      v = Random(range);
    }
    dug.addDirectedEdge(u, v);
    set.add(`${u},${v}`);
  }
  dug.suffleEdges();

  return dug.edges;
};
export default RndDirectedUnweighted;
