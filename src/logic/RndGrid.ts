import Random from '../helper/Random';
import RndNumber from './RndNumber';
import RndString from './RndString';

export interface RndGridParams {
  minDim: [number, number];
  maxDim: [number, number];
  // for array of strings or patterns
  pattern?: RegExp | string;
  // for array of numbers
  range?: [number, number];
}

export interface RndGridReturns {
  result: Array<Array<number | string>>;
  output: string;
  row: number;
  col: number;
}

export type RndGridType = (rndGridParams: RndGridParams) => RndGridReturns;

/**
 * Random 2D grid generator either with regex or numeric range
 * @returns 2D grid within provided dimention range
 */

const RndGrid: RndGridType = ({ minDim, maxDim, pattern, range }) => {
  const [minRow, minCol] = minDim;
  const [maxRow, maxCol] = maxDim;
  const row = Random({ min: minRow, max: maxRow });
  const col = Random({ max: maxCol, min: minCol });
  const arr: Array<Array<number | string>> = Array.from(Array(row), () => new Array(col));

  let output = `${row} ${col}\n`;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (pattern !== undefined) {
        arr[i][j] = RndString({ pattern }).result;
      } else {
        if (range === undefined) {
          throw new Error('Either pattern or range must be provided');
        } else {
          const [min, max] = range;
          arr[i][j] = RndNumber({ min, max }).result;
        }
      }
      output += arr[i][j] + ' ';
    }
    output += '\n';
  }
  return {
    result: arr,
    row,
    col,
    output,
  };
};

export default RndGrid;
