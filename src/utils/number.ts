import inquirer from 'inquirer';
import RndNumber from '../logic/RndNumber';
import { numberQuestion } from './questions';

const NumberPrompt = async (testCases: number): Promise<void> => {
  inquirer.prompt(numberQuestion).then(answers => {
    const min = parseInt(answers.min);
    const max = parseInt(answers.max);
    const result = RndNumber({ max, min });
    console.log(result);
  });
};

export default NumberPrompt;
