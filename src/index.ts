#!/usr/bin/env node

import inquirer from 'inquirer';
import { initialQuestions } from './utils/questions';

import {
  NumberPrompt,
  StringPrompt,
  ArrayPrompt,
  PermutationArrayPrompt,
} from './utils/commonImports';

inquirer.prompt(initialQuestions).then(answers => {
  const { type, fileName } = answers;
  const testCases = parseInt(answers.testCases);

  switch (type) {
    case 'Number':
      NumberPrompt(testCases, fileName);
      break;
    case 'String':
      StringPrompt(testCases, fileName);
      break;
    case 'Array':
      ArrayPrompt(testCases, fileName);
      break;
    case 'Permutation Array':
      PermutationArrayPrompt(testCases, fileName);
      break;
  }
});
