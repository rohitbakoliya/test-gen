import inquirer from 'inquirer';
import RndPermutation from '../logic/RndPermutation';
import exportFile from '../utils/exportFile';
import { permutationArrayQuestion } from '../utils/questions';

const PermutationArrayPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(permutationArrayQuestion).then(async answers => {
    const N = parseInt(answers.N);
    exportFile({ fileName, testCases, func: RndPermutation, params: N });
  });
};

export default PermutationArrayPrompt;
