import { Char, SpacialChar } from '../@types/Char';
import Random from '../helper/Random';

interface RndStringParams {
  size?: number;
  fixedSize?: boolean;
  pattern?: string;
  digits?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  spacialchars?: boolean;
}

type RndStringType = (rndStringParams: RndStringParams) => string;

type GenFromPattern = (pattern: string, mxLength: number) => string;

/**
 * generate random string
 */
const RndString: RndStringType = ({
  size,
  fixedSize = true,
  pattern = '',
  digits = false,
  uppercase = false,
  lowercase = true,
  spacialchars = false,
}) => {
  // cannot be undefined
  let mxLength = (!!pattern.length && pattern.length) || (size as number);

  if (!fixedSize) {
    mxLength = Random({ min: 1, max: mxLength });
  }
  if (pattern) {
    return fromPattern(pattern, mxLength);
  }
  const allowedChars: Array<'d' | 'u' | 'l' | 's'> = [];
  if (digits) allowedChars.push('d');
  if (uppercase) allowedChars.push('u');
  if (lowercase) allowedChars.push('l');
  if (spacialchars) allowedChars.push('s');

  let result: string = '';
  for (let i = 0; i < mxLength; i++) {
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
 */
const fromPattern: GenFromPattern = (pattern, mxLength) => {
  let result: string = '';
  for (let i = 0; i < mxLength; i++) {
    result += pattern[Random({ min: 0, max: pattern.length - 1 })];
  }
  return result;
};

export default RndString;
