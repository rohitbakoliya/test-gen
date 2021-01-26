#!/usr/bin/env node

import inquirer from 'inquirer';
import NumberPrompt from './utils/number';
import { initialQuestions } from './utils/questions';

inquirer.prompt(initialQuestions).then(answers => {
  const type = answers.type;
  const testCases = parseInt(answers.testCases);

  switch (type) {
    case 'Number':
      NumberPrompt(testCases);
      break;
  }
});
