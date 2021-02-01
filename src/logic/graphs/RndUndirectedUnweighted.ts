import { Edges } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

export interface RndUndirectedUnWeightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
}

export interface RndUndirectedUnWeightedReturns {
  result: Edges;
  nodes: number;
  edges: number;
  output: string;
}

export type RndUndirectedUnWeightedType = (
  rndUndirectedUnWeightedParams: RndUndirectedUnWeightedParams
) => RndUndirectedUnWeightedReturns;

/**
 * Generates Random undirected unweighted Graph
 * @returns edge set
 */
const RndUndirectedUnWeighted: RndUndirectedUnWeightedType = ({ nodesRange, edgesRange }) => {
  const nodes = Random({ max: nodesRange[1], min: nodesRange[0] });
  // max edges need to be fixed
  // i.e E = N * (N - 1) / 2
  const edges = Random({
    max: Math.min(edgesRange[1], (nodes * (nodes - 1)) / 2),
    min: edgesRange[0],
  });

  const uug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  // to find u, v pair
  const range = { min: 1, max: nodes };
  for (let i = 0; i < edges; i++) {
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

  // creating output string for graphs
  let output = `${nodes} ${edges}\n`;
  uug.edges.forEach(function (edge) {
    output += edge.join(' ') + '\n';
  });

  return {
    result: uug.edges,
    nodes,
    edges,
    output,
  };
};
export default RndUndirectedUnWeighted;
