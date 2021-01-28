import {
  validateWholeBigNumber,
  validateWholePosNumber,
  validateFileName,
  validateRegex,
  validateDimention,
} from './validators';
import { INT_MAX } from '../constants/constants';
export const initialQuestions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the Input file name',
    default: () => 'input',
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
    message: 'Minimum Possible value of Number',
    default: () => `0`,
    validate: validateWholeBigNumber,
  },
  {
    type: 'input',
    name: 'max',
    default: () => `${INT_MAX}`,
    message: 'Maximum Possible value of Number',
    validate: validateWholeBigNumber,
  },
];

export const stringQuestion = [
  {
    type: 'input',
    name: 'pattern',
    default: () => '[a-z]*',
    message: 'Enter Pattern as Regular Expression',
    validate: validateRegex,
  },
];
export const arrayQuestion = [
  {
    type: 'input',
    name: 'minSize',
    message: 'Enter minmimum size of an Array',
    validate: validateWholePosNumber,
  },
  {
    type: 'input',
    name: 'maxSize',
    message: 'Enter maximum size of an Array',
    validate: validateWholePosNumber,
  },
  {
    type: 'list',
    name: 'arrayGenType',
    message: 'How do you want to generate array?',
    choices: ['Using Regular Expression', 'Using Number Range'],
  },
];
export const gridQuestion = [
  {
    type: 'input',
    name: 'minDim',
    message: 'Enter minimum dimention of grid [comma separated]',
    validate: validateDimention,
  },
  {
    type: 'input',
    name: 'maxDim',
    message: 'Enter maximum dimention of grid [comma separated]',
    validate: validateDimention,
  },
  {
    type: 'list',
    name: 'arrayGenType',
    message: 'How do you want to generate array?',
    choices: ['Using Regular Expression', 'Using Number Range'],
  },
];
export const arrayPatternQuestions = stringQuestion;
export const arrayRangeQuestion = numberQuestion;

export const permutationArrayQuestion = [
  {
    type: 'input',
    name: 'minSize',
    message: 'Enter minimum size of Permutation Array',
    validate: validateWholePosNumber,
  },
  {
    type: 'input',
    name: 'maxSize',
    message: 'Enter maximum size of Permutation Array',
    validate: validateWholePosNumber,
  },
];
export const treeQuestion = [];
export const graphQuestion = [];
