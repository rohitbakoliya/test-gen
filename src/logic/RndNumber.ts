import Random from '../helper/Random';
import { INT_MAX, INT_MIN } from '../constants/constants';

export interface NumberParams {
  min?: number;
  max?: number;
}

export interface NumberReturns {
  output: string;
  result: number;
}

export type RndNumberType = (params: NumberParams) => NumberReturns;

/**
 * generate an int32 random number in an optional [from, to] range
 */
const RndNumber: RndNumberType = ({ min = INT_MIN, max = INT_MAX }) => {
  const result = Random({ min: Math.min(min, max), max: Math.max(min, max) });
  const output = result + '\n';
  return {
    result,
    output,
  };
};

export default RndNumber;
