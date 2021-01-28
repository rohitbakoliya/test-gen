import inquirer from 'inquirer';
import RndPermutation from '../logic/RndPermutation';
import exportFile from '../utils/exportFile';
import { permutationArrayQuestion } from '../utils/questions';

const PermutationArrayPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer
    .prompt(permutationArrayQuestion)
    .then(async (answers: { maxSize: string; minSize: string }) => {
      const maxSize = parseInt(answers.maxSize);
      const minSize = parseInt(answers.minSize);
      exportFile({ fileName, testCases, func: RndPermutation, params: { maxSize, minSize } });
    });
};

export default PermutationArrayPrompt;
