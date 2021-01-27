import { existsSync } from 'fs';

/**
 * to validate whole positive number in range [0, 999999]
 */

export const validateWholePosNumber = (value: string): string | boolean => {
  const pass = value.match(/^(0|[1-9]\d{0,6})$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate whole big positive number
 */
export const validateWholePosBigNumber = (value: string): string | boolean => {
  const pass = value.match(/^(0|[1-9]\d*)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate number in range [-999999, 999999]
 */
export const validateWholeNumber = (value: string): string | boolean => {
  const pass = value.match(/^-?(0|[1-9]\d{0,6})(?<!-0)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate both positive and nagetive numbers
 */
export const validateWholeBigNumber = (value: string): string | boolean => {
  const pass = value.match(/^-?(0|[1-9]\d*)(?<!-0)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate positive fractional number
 */
export const validatePosFraction = (value: string): string | boolean => {
  const pass = value.match(/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate both positive and negetive fractional numbers
 */
export const validateFraction = (value: string): string | boolean => {
  const pass = value.match(/^(?!-0?(\.0+)?$)-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/);
  if (pass) {
    return true;
  }
  return 'Please enter a valid Number';
};

/**
 * to validate filename
 */
export const validateFileName = (value: string): string | boolean => {
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
export const validateRegex = (value: string): string | boolean => {
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
