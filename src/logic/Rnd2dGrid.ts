import RndNumber from './RndNumber';
import RndString from './RndString';

interface RndArrayParams {
  dim: [number, number];
  // for array of strings or patterns
  pattern?: RegExp | string;
  // for array of numbers
  range?: [number, number];
}

const Rnd2dGrid = (rndArrayParams: RndArrayParams): Array<Array<number | string>> => {
  const { dim, pattern, range } = rndArrayParams;
  const [row, col] = dim;
  const arr: Array<Array<number | string>> = Array.from(Array(row), () => new Array(col));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (pattern !== undefined) {
        arr[i][j] = RndString(pattern);
      } else {
        const [min, max] = range!;
        arr[i][j] = RndNumber({ min, max });
      }
    }
  }
  return arr;
};

export default Rnd2dGrid;
