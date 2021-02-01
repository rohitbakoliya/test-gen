import RandExp from 'randexp';

export interface RndStringParams {
  pattern: RegExp | string;
}

export interface RndStringReturns {
  output: string;
  result: string;
}

export type RndStringType = (rndStringParams: RndStringParams) => RndStringReturns;

/**
 * generate random string using regex
 * @param pattern
 * @returns  random generated string by given regex
 */
const RndString: RndStringType = ({ pattern }) => {
  const result = new RandExp(pattern).gen();
  const output = result + '\n';
  return {
    result,
    output,
  };
};

export default RndString;
