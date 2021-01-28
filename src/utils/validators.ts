import { existsSync } from 'fs';

type validator = (value: string) => string | boolean;

/**
 * to validate whole positive number in range [0, 999999]
 */

export const validateWholePosNumber: validator = value => {
  const pass = value.match(/^(0|[1-9]\d{0,6})$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate whole big positive number
 */
export const validateWholePosBigNumber: validator = value => {
  const pass = value.match(/^(0|[1-9]\d*)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate number in range [-999999, 999999]
 */
export const validateWholeNumber: validator = value => {
  const pass = value.match(/^-?(0|[1-9]\d{0,6})(?<!-0)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate both positive and nagetive numbers
 */
export const validateWholeBigNumber: validator = value => {
  const pass = value.match(/^-?(0|[1-9]\d*)(?<!-0)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate positive fractional number
 */
export const validatePosFraction: validator = value => {
  const pass = value.match(/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate both positive and negetive fractional numbers
 */
export const validateFraction: validator = value => {
  const pass = value.match(/^(?!-0?(\.0+)?$)-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate filename
 */
export const validateFileName: validator = value => {
  const pass = value.match(/[\w\s-.]+/);
  if (pass) {
    if (!existsSync(value + '.txt')) {
      return true;
    }
    return `File ${value}.txt already exists!`;
  }
  return 'Please enter a valid file name';
};

/**
 * to validate regular expression
 */
export const validateRegex: validator = value => {
  let isValid = value.length !== 0;
  try {
    RegExp(value);
  } catch (e) {
    isValid = false;
  }
  if (isValid) {
    return true;
  }
  return 'Please enter valid regular expression';
};

export const validateDimention: validator = value => {
  const pass = value.match(/^(0|[1-9]\d{0,6})\s*,{1}\s*(0|[1-9]\d{0,6})$/);
  if (pass) {
    return true;
  }
  return 'Please enter correct Dimention';
};
