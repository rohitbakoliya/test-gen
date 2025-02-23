import { Edges } from '../../@types/edge';
import Random from '../../helper/Random';
import SuffleArray from '../ShuffleArray';
import GraphUtil from '../../helper/GraphUtil';

export interface RndUnweightedTreeParams {
  nodesRange: [number, number];
}

export interface RndUnweightedTreeReturns {
  result: Edges;
  nodes: number;
  output: string;
}

export type RndUnweightedTreeType = (
  rndUnweightedTreeParams: RndUnweightedTreeParams
) => RndUnweightedTreeReturns;

/**
 * Generates Random unweighted Tree
 * @param nodesRange node range [minNodes, MaxNodes]
 * @returns edge set
 */
const RndUnweightedTree: RndUnweightedTreeType = ({ nodesRange }) => {
  const nodes = Random({ min: nodesRange[0], max: nodesRange[1] });
  const t: GraphUtil = new GraphUtil(nodes);
  const p: number[] = [];
  const permutation: number[] = [];
  for (let i = 0; i < nodes; i++) {
    p.push(Random({ min: 0, max: Math.max(0, i - 1) }));
    permutation.push(i);
  }
  SuffleArray(permutation);
  for (let i = 1; i < nodes; i++) {
    t.addEdge(permutation[i] + 1, permutation[p[i]] + 1);
  }
  t.suffleEdges();

  let output = nodes + '\n';
  t.edges.forEach(function (edge) {
    output += edge.join(' ') + '\n';
  });

  return {
    result: t.edges,
    nodes,
    output,
  };
};

export default RndUnweightedTree;
