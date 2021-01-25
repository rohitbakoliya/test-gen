import { Edge, WtEdge } from '../../@types/edge';
import Random from '../../helper/Random';
import RndDirectedUnweighted from './RndDirectedUnweighted';

const RndDirectedWeighted = (nodes: number, E: number, minWt: number, maxWt: number): WtEdge => {
  const edges: Edge = RndDirectedUnweighted(nodes, E);
  const wtEdges: WtEdge = [];
  edges.forEach(edge => {
    const rndWt = Random({ max: maxWt, min: minWt });
    wtEdges.push([...edge, rndWt]);
  });
  return wtEdges;
};
export default RndDirectedWeighted;
