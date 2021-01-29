import Random from '../helper/Random';
import RndNumber from './RndNumber';
import RndString from './RndString';

export interface RndArrayParams {
  maxSize: number;
  minSize: number;
  // for array of strings or patterns
  pattern?: RegExp | string;
  // for array of numbers
  range?: [number, number];
}

export type RndArrayType = (rndArrayParams: RndArrayParams) => Array<number | string>;

/**
 * Generates Random array of `string` | `number`
 * @returns random generated array
 */
const RndArray: RndArrayType = ({ maxSize, minSize, pattern, range }) => {
  const size = Random({ max: maxSize, min: minSize });
  const arr: Array<number | string> = Array.from(Array(size));
  for (let i = 0; i < size; i++) {
    if (pattern !== undefined) {
      arr[i] = RndString({ pattern });
    } else {
      if (range === undefined) {
        throw new Error('Either pattern or range must be provided');
      } else {
        const [min, max] = range;
        arr[i] = RndNumber({ min, max });
      }
    }
  }
  return arr;
};

export default RndArray;
