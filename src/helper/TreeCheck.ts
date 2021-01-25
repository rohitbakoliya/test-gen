import { Edge } from '../@types/edge';

class TreeCheck {
  nodes: number;
  adj: Array<Array<number>>;
  vis: Array<boolean>;
  haveCycle: boolean;

  constructor(nodes: number, edges: Edge) {
    this.nodes = nodes;
    this.vis = new Array(nodes + 1).fill(false);
    this.adj = Array.from(Array(nodes + 1), () => []);
    edges.forEach(edge => {
      const [u, v] = edge;
      this.adj[u].push(v);
      this.adj[v].push(u);
    });
    this.haveCycle = this.dfs(1);
  }

  dfs(i: number, parent: number = -1): boolean {
    this.vis[i] = true;
    this.adj[i].forEach(x => {
      if (!this.vis[x]) {
        if (this.dfs(x, i)) return true;
      }
      // if back edge found
      else if (x !== parent) return true;
    });
    return false;
  }

  isConntected(): boolean {
    for (let i = 1; i <= this.nodes; i++) {
      if (!this.vis[i]) return false;
    }
    return true;
  }

  isTree(): boolean {
    return this.isConntected() && !this.haveCycle;
  }
}
export default TreeCheck;
