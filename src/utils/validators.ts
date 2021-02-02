import { existsSync } from 'fs';
import chalk from 'chalk';

type validator = (value: string) => string | boolean;

const error = chalk.red;

/**
 * to validate whole positive number in range [0, 999999]
 */

export const validateWholeNumber: validator = value => {
  const pass = value.match(/^(0|[1-9]\d{0,6})$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Number');
};

/**
 * to validate whole big positive number
 */
export const validateWholeBigNumber: validator = value => {
  const pass = value.match(/^(0|[1-9]\d*)$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Number');
};

/**
 * to validate number in range [-999999, 999999]
 */
export const validateNumber: validator = value => {
  const pass = value.match(/^-?(0|[1-9]\d{0,6})(?<!-0)$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Number');
};

/**
 * to validate both positive and nagetive numbers
 */
export const validateBigNumber: validator = value => {
  const pass = value.match(/^-?(0|[1-9]\d*)(?<!-0)$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Number');
};

/**
 * to validate natural numbers
 */
export const validateNaturalNumber: validator = value => {
  const pass = value.match(/[1-9]\d*/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Natural Number');
};

/**
 * to validate big natural numbers
 */
export const validateNaturalBigNumber: validator = value => {
  const pass = value.match(/[1-9]\d*/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Natural Number');
};

/**
 * to validate positive fractional number
 */
export const validatePosFraction: validator = value => {
  const pass = value.match(/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid positive Number');
};

/**
 * to validate both positive and negetive fractional numbers
 */
export const validateFraction: validator = value => {
  const pass = value.match(/^(?!-0?(\.0+)?$)-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return error('Please enter a valid Number');
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
    return error(`File ${value}.txt already exists!`);
  }
  return error('Please enter a valid file name');
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
  return error('Please enter valid regular expression');
};

export const validateRange: validator = value => {
  const pass = value.match(/^([1-9]\d{0,6})\s*,{1}\s*([1-9]\d{0,6})$/);
  if (pass) {
    return true;
  }
  return error('Please enter correct Range');
};
