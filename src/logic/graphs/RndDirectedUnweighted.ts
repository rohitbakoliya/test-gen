import { Edge } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

const RndDirectedUnweighted = (nodes: number, E: number): Edge => {
  const dug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  const range = { min: 1, max: nodes };
  for (let i = 0; i < E; i++) {
    let u = Random(range);
    let v = Random(range);

    while (set.has(`${u},${v}`) || u === v) {
      u = Random(range);
      v = Random(range);
    }
    dug.addDirectedEdge(u, v);
    set.add(`${u},${v}`);
  }
  dug.suffleEdges();

  return dug.edges;
};
export default RndDirectedUnweighted;
