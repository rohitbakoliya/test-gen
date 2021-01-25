import { Edge } from '../../@types/edge';
import GraphUtil from '../../helper/GraphUtil';
import Random from '../../helper/Random';

const RndUndirectedUnWeighted = (nodes: number, E: number): Edge => {
  const uug: GraphUtil = new GraphUtil(nodes);

  const set: Set<string> = new Set();

  const range = { min: 1, max: nodes };
  for (let i = 0; i < E; i++) {
    let u = Random(range);
    let v = Random(range);

    while (set.has(`${u},${v}`) || set.has(`${v},${u}`) || u === v) {
      u = Random(range);
      v = Random(range);
    }
    uug.addEdge(u, v);
    set.add(`${u},${v}`);
  }
  uug.suffleEdges();

  return uug.edges;
};
export default RndUndirectedUnWeighted;
