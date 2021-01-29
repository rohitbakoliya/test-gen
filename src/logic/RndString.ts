import RandExp from 'randexp';

export interface RndStringParams {
  pattern: RegExp | string;
}

export type RndStringType = (rndStringParams: RndStringParams) => string;

/**
 * generate random string using regex
 * @param pattern
 * @returns  random generated string by given regex
 */
const RndString: RndStringType = ({ pattern }) => {
  return new RandExp(pattern).gen();
};

export default RndString;
