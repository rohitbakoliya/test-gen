#!/usr/bin/env node

import inquirer from 'inquirer';
import { initialQuestions } from './utils/questions';

import {
  NumberPrompt,
  StringPrompt,
  ArrayPrompt,
  PermutationArrayPrompt,
  GridPrompt,
  TreePrompt,
  GraphPrompt,
} from './utils/commonImports';

inquirer
  .prompt(initialQuestions)
  .then((answers: { type: string; fileName: string; testCases: string }) => {
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
      case 'Grid':
        GridPrompt(testCases, fileName);
        break;
      case 'Tree':
        TreePrompt(testCases, fileName);
        break;
      case 'Graph':
        GraphPrompt(testCases, fileName);
        break;
      case 'default':
        throw new Error('oops!! fall through case');
    }
  });
