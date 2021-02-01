import { WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndDirectedUnweighted from './RndDirectedUnweighted';

export interface RndDirectedWeightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
  wtRange: [number, number];
}

export interface RndUndirectedUnWeightedReturns {
  result: WtEdge;
  nodes: number;
  edges: number;
  output: string;
}

export type RndDirectedWeightedType = (
  rndDirectedWeightedParams: RndDirectedWeightedParams
) => RndUndirectedUnWeightedReturns;

/**
 * Generates Random directed weighted Graph
 * @returns weight-edge set
 */
const RndDirectedWeighted: RndDirectedWeightedType = ({ nodesRange, edgesRange, wtRange }) => {
  const { result, edges, nodes } = RndDirectedUnweighted({ nodesRange, edgesRange });
  const wtEdges: WtEdge = [];
  result.forEach(edge => {
    const rndWt = Random({ max: wtRange[1], min: wtRange[0] });
    wtEdges.push([...edge, rndWt]);
  });

  // creating output for graphs
  let output = `${nodes} ${edges}\n`;
  wtEdges.forEach(function (wtEdge) {
    output += wtEdge.join(' ') + '\n';
  });
  return {
    result: wtEdges,
    nodes,
    edges,
    output,
  };
};
export default RndDirectedWeighted;
