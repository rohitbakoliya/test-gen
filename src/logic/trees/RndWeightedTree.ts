import { WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndUnweightedTree from './RndUnweightedTree';

const RndWeightedTree = (nodes: number, minWt: number, maxWt: number): WtEdge => {
  const edges = RndUnweightedTree(nodes);
  const wtEdges: WtEdge = [];
  edges.forEach(edge => {
    const rndWt = Random({ max: maxWt, min: minWt });
    wtEdges.push([...edge, rndWt]);
  });
  return wtEdges;
};
export default RndWeightedTree;
