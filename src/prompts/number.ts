import inquirer from 'inquirer';
import RndNumber from '../logic/RndNumber';
import exportFile from '../utils/exportFile';
import { numberQuestion } from '../utils/questions';

const NumberPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(numberQuestion).then(answers => {
    const min = parseInt(answers.min);
    const max = parseInt(answers.max);
    exportFile({ testCases, fileName, func: RndNumber, params: { max, min } });
  });
};

export default NumberPrompt;
