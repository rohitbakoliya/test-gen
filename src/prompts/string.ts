import inquirer from 'inquirer';
import RndString from '../logic/RndString';
import exportFile from '../utils/exportFile';
import { stringQuestion } from '../utils/questions';

const StringPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(stringQuestion).then(answers => {
    const pattern = RegExp(answers.pattern);
    exportFile({ testCases, fileName, func: RndString, params: { pattern } });
  });
};

export default StringPrompt;
