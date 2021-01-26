import { validateWholeBigNumber, validateWholePosNumber, validateFileName } from './validators';
import { INT_MAX, INT_MIN } from '../constants/constants';
export const initialQuestions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the Input file name',
    transformer: (fileName: any, _: any, flags: any) => {
      if (flags.isFinal) {
        return fileName + '.txt';
      }
      return fileName;
    },
    validate: validateFileName,
  },
  {
    type: 'input',
    name: 'testCases',
    message: 'Enter the number of test cases',
    default: () => '0',
    validate: validateWholePosNumber,
  },
  {
    type: 'list',
    name: 'type',
    message: 'Choose type of test cases',
    choices: ['Number', 'String', 'Array', 'Permutation Array', 'Tree', 'Graph'],
  },
];

export const numberQuestion = [
  {
    type: 'input',
    name: 'min',
    message: 'Minimum Possible value for Random Number',
    default: () => `${INT_MIN}`,
    validate: validateWholeBigNumber,
  },
  {
    type: 'input',
    name: 'max',
    default: () => `${INT_MAX}`,
    message: 'Maximum Possible value for Random Number',
    validate: validateWholeBigNumber,
  },
];

export const stringQuestion = [];
export const arrayQuestion = [];

export const permutationArrayQuestion = [];
export const treeQuestion = [];
export const graphQuestion = [];
