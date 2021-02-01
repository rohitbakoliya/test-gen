import { Edges } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

export interface RndDirectedUnweightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
}

export interface RndDirectedUnweigtedReturns {
  result: Edges;
  nodes: number;
  edges: number;
  output: string;
}

export type RndDirectedUnweightedType = (
  rndDirectedUnweightedParams: RndDirectedUnweightedParams
) => RndDirectedUnweigtedReturns;

/**
 * Generates Random directed unweighted Graph
 * @returns edge set
 */
const RndDirectedUnweighted: RndDirectedUnweightedType = ({ nodesRange, edgesRange }) => {
  const nodes = Random({ max: nodesRange[1], min: nodesRange[0] });
  // max edges need to be fixed
  // i.e E = N * (N - 1) / 2
  const edges = Random({
    max: Math.min(edgesRange[1], (nodes * (nodes - 1)) / 2),
    min: edgesRange[0],
  });

  const dug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  const range = { min: 1, max: nodes };
  for (let i = 0; i < edges; i++) {
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

  // creating output string for graphs
  let output = `${nodes} ${edges}\n`;

  dug.edges.forEach(function (edge) {
    output += edge.join(' ') + '\n';
  });
  return {
    result: dug.edges,
    edges,
    nodes,
    output,
  };
};
export default RndDirectedUnweighted;
