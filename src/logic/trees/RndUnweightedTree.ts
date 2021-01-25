import { Edge } from '../../@types/edge';
import Random from '../../helper/Random';
import SuffleArray from '../ShuffleArray';
import Tree from './Tree';

const RndUnweightedTree = (nodes: number): Edge => {
  const t: Tree = new Tree(nodes);
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
  return t.edges;
};

export default RndUnweightedTree;
