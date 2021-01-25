import RandExp from 'randexp';

/**
 * generate random string using regex
 * @param {RegExp|string} pattern
 * @returns {string} random generated string by given regex
 */
const RndString = (pattern: RegExp | string = /.+/): string => {
  return new RandExp(pattern).gen();
};

export default RndString;
