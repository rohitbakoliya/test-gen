import Random from '../../helper/Random';

/**
 * Utility Class for Unweighted Tree generation
 */
class Tree {
  nodes: number;
  edges: Array<[number, number]>;

  constructor(nodes: number) {
    this.nodes = nodes;
    this.edges = [];
  }

  addEdge = (u: number, v: number) =>
    Random({ min: 0, max: 1 }) ? this.edges.push([u, v]) : this.edges.push([v, u]);
}
export default Tree;
