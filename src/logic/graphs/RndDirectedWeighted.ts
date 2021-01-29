import { Edge, WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndDirectedUnweighted from './RndDirectedUnweighted';

export interface RndDirectedWeightedParams {
  nodesRange: [number, number];
  edgesRange: [number, number];
  wtRange: [number, number];
}

export type RndDirectedWeightedType = (
  rndDirectedWeightedParams: RndDirectedWeightedParams
) => WtEdge;

/**
 * Generates Random directed weighted Graph
 * @returns weight-edge set
 */
const RndDirectedWeighted: RndDirectedWeightedType = ({ nodesRange, edgesRange, wtRange }) => {
  const edges: Edge = RndDirectedUnweighted({ nodesRange, edgesRange });
  const wtEdges: WtEdge = [];
  edges.forEach(edge => {
    const rndWt = Random({ max: wtRange[1], min: wtRange[0] });
    wtEdges.push([...edge, rndWt]);
  });
  return wtEdges;
};
export default RndDirectedWeighted;
