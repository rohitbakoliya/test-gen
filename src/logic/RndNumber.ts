import Random from '../helper/Random';
import { INT_MAX, INT_MIN } from '../constants/constants';

export interface NumberParams {
  min?: number;
  max?: number;
}

export type RndRange = (params: NumberParams) => number;

/**
 * generate an int32 random number in an optional [from, to] range
 */
const RndNumber: RndRange = ({ min = INT_MIN, max = INT_MAX }) =>
  Random({ min: Math.min(min, max), max: Math.max(min, max) });

export default RndNumber;
