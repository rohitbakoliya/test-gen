import { WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndUnweightedTree from './RndUnweightedTree';

export interface RndWeightedTreeParams {
  nodesRange: [number, number];
  wtRange: [number, number];
}

export interface RndWeightedTreeReturns {
  result: WtEdge;
  nodes: number;
  output: string;
}
export type RndWeightedTreeType = (
  rndWeightedTreeParams: RndWeightedTreeParams
) => RndWeightedTreeReturns;

/**
 * Generates Random weighted Tree
 * @param nodesRange node range [minNodes, MaxNodes]
 * @param wtRange weight range for edge weight
 * @returns edge set
 */

const RndWeightedTree: RndWeightedTreeType = ({ nodesRange, wtRange }) => {
  const { result: edges, nodes } = RndUnweightedTree({ nodesRange });
  const wtEdges: WtEdge = [];

  let output = nodes + '\n';
  edges.forEach(edge => {
    const rndWt = Random({ max: wtRange[1], min: wtRange[0] });
    wtEdges.push([...edge, rndWt]);
    output += wtEdges.join(' ') + '\n';
  });
  return {
    result: wtEdges,
    nodes,
    output,
  };
};
export default RndWeightedTree;
