import Random from './Random';
import SuffleArray from '../logic/ShuffleArray';
import { Edges } from '../@types/edge';

/**
 * Utility Class for Graph and tree generation
 */
class GraphUtil {
  nodes: number;
  edges: Edges;

  constructor(nodes: number) {
    this.nodes = nodes;
    this.edges = [];
  }

  addEdge = (u: number, v: number) =>
    Random({ min: 0, max: 1 }) ? this.edges.push([u, v]) : this.edges.push([v, u]);

  addDirectedEdge = (u: number, v: number) => this.edges.push([u, v]);

  suffleEdges = () => SuffleArray(this.edges);
}
export default GraphUtil;
