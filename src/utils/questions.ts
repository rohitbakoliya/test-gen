import {
  validateWholeBigNumber,
  validateWholePosNumber,
  validateFileName,
  validateRegex,
  validateRange,
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
    choices: ['Number', 'String', 'Array', 'Permutation Array', 'Grid', 'Tree', 'Graph'],
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
    validate: validateRange,
  },
  {
    type: 'input',
    name: 'maxDim',
    message: 'Enter maximum dimention of grid [comma separated]',
    validate: validateRange,
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
export const treeQuestion = [
  {
    type: 'list',
    name: 'treeType',
    message: 'Type of tree',
    choices: ['Weighted Tree', 'Unweighted Tree'],
  },
];

export const wtreeQuestion = [
  {
    type: 'input',
    name: 'nodesRange',
    message: 'Enter the nodes range [separated by comma]',
    validate: validateRange,
  },
  {
    type: 'input',
    name: 'wtRange',
    message: 'Enter the weight range [separated by comma]',
    validate: validateRange,
  },
];

export const utreeQuestion = [wtreeQuestion[0]];

export const graphQuestion = [
  {
    type: 'list',
    name: 'graphType',
    message: 'Type of tree',
    choices: [
      'Directed Weighted Graph',
      'Directed Unweighted Graph',
      'Undirected Unweighted Graph',
    ],
  },
];

export const uuGraphQuestion = [
  {
    type: 'input',
    name: 'nodesRange',
    message: 'Enter the nodes range [separated by comma]',
    validate: validateRange,
  },
  {
    type: 'input',
    name: 'edgesRange',
    message: 'Enter the edges range [separated by comma]',
    validate: validateRange,
  },
];

export const duGraphQuestion = uuGraphQuestion;

export const dwGraphQuestion = [
  uuGraphQuestion[0],
  {
    type: 'input',
    name: 'wtRange',
    message: 'Enter the weight range [separated by comma]',
    validate: validateRange,
  },
];
