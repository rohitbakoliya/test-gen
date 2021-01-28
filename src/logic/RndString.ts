import RandExp from 'randexp';

export type RndStringType = (pattern: RegExp | string) => string;

/**
 * generate random string using regex
 * @param {RegExp|string} pattern
 * @returns {string} random generated string by given regex
 */
const RndString: RndStringType = pattern => {
  return new RandExp(pattern).gen();
};

export default RndString;
