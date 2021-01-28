import {
  validateWholeBigNumber,
  validateWholePosNumber,
  validateFileName,
  validateRegex,
} from './validators';
import { INT_MAX, INT_MIN } from '../constants/constants';
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
    message: 'Minimum Possible value for Number',
    default: () => `${INT_MIN}`,
    validate: validateWholeBigNumber,
  },
  {
    type: 'input',
    name: 'max',
    default: () => `${INT_MAX}`,
    message: 'Maximum Possible value for Number',
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
    name: 'rows',
    default: () => '1',
    message: 'Enter Number of rows',
    validate: validateWholePosNumber,
  },
  {
    type: 'input',
    name: 'cols',
    message: 'Enter Number of columns',
    validate: validateWholePosNumber,
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
    name: 'N',
    message: 'Enter maximum size of Permutation Array',
    validate: validateWholePosNumber,
  },
];
export const treeQuestion = [];
export const graphQuestion = [];
