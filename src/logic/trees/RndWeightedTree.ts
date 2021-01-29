import { WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndUnweightedTree from './RndUnweightedTree';

export interface RndWeightedTreeParams {
  nodesRange: [number, number];
  wtRange: [number, number];
}

export type RndWeightedTreeType = (rndWeightedTreeParams: RndWeightedTreeParams) => WtEdge;

/**
 * Generates Random weighted Tree
 * @param nodesRange node range [minNodes, MaxNodes]
 * @param wtRange weight range for edge weight
 * @returns edge set
 */

const RndWeightedTree: RndWeightedTreeType = ({ nodesRange, wtRange }) => {
  const edges = RndUnweightedTree({ nodesRange });
  const wtEdges: WtEdge = [];
  edges.forEach(edge => {
    const rndWt = Random({ max: wtRange[1], min: wtRange[0] });
    wtEdges.push([...edge, rndWt]);
  });
  return wtEdges;
};
export default RndWeightedTree;
