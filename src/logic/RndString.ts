import { Char, SpacialChar } from '../@types/Char';
import RandExp from 'randexp';
import Random from '../helper/Random';

interface RndStringParams {
  mxLength?: number;
  mnLength?: number;
  fixedLength?: boolean;
  pattern?: RegExp | string;
  digits?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  spacialchars?: boolean;
}

type RndStringType = (rndStringParams: RndStringParams) => string;

/**
 * generate random string
 * @param pattern optional regex parameter
 */
const RndString: RndStringType = ({
  pattern = '',
  mxLength,
  mnLength = 1,
  digits = false,
  uppercase = false,
  lowercase = true,
  spacialchars = false,
}) => {
  // mxLength cannot be undefined
  // if (pattern.toString.length === 0 && mxLength === undefined) {
  //   throw new Error('length cannot be undifiend when pattern is not provided.');
  // }
  const length = Random({ min: mnLength, max: mxLength! });

  if (pattern) {
    return fromPattern(pattern);
  }
  const allowedChars: Array<'d' | 'u' | 'l' | 's'> = [];
  if (digits) allowedChars.push('d');
  if (uppercase) allowedChars.push('u');
  if (lowercase) allowedChars.push('l');
  if (spacialchars) allowedChars.push('s');

  let result: string = '';
  for (let i = 0; i < length; i++) {
    const rndCharType = allowedChars[Random({ min: 0, max: allowedChars.length - 1 })];
    switch (rndCharType) {
      case 'd':
        result += getDigit();
        break;
      case 'u':
        result += getUpperCase();
        break;
      case 'l':
        result += getLowerCase();
        break;
      case 's':
        result += getSpacialChar();
        break;
    }
  }
  return result;
};

function getDigit(): Char {
  return String.fromCharCode(Random({ min: 48, max: 57 })) as Char;
}
function getUpperCase(): Char {
  return String.fromCharCode(Random({ min: 65, max: 90 })) as Char;
}
function getLowerCase(): Char {
  return String.fromCharCode(Random({ min: 97, max: 112 })) as Char;
}
function getSpacialChar(): SpacialChar {
  const spacialchars: string = '~@!#$%&*';
  return spacialchars[Random({ min: 0, max: spacialchars.length - 1 })] as SpacialChar;
}
/**
 * generate random string from given pattern
 * @param {RegExp|string} pattern
 * @returns {string} random generated string by given regex
 */
const fromPattern = (pattern: RegExp | string): string => new RandExp(pattern).gen();

export default RndString;
