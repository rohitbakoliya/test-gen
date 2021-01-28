import inquirer from 'inquirer';
import RndArray from '../logic/RndArray';
import exportFile from '../utils/exportFile';
import { arrayQuestion, arrayPatternQuestions, arrayRangeQuestion } from '../utils/questions';

const ArrayPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer
    .prompt(arrayQuestion)
    .then(async (answers: { minSize: string; maxSize: string; arrayGenType: string }) => {
      const minSize = parseInt(answers.minSize);
      const maxSize = parseInt(answers.maxSize);
      if (answers.arrayGenType === 'Using Regular Expression') {
        ArrayPatternPrompt(testCases, fileName, minSize, maxSize);
      } else {
        ArrayRangePrompt(testCases, fileName, minSize, maxSize);
      }
    });
};

const ArrayPatternPrompt = async (
  testCases: number,
  fileName: string,
  minSize: number,
  maxSize: number
): Promise<void> => {
  inquirer.prompt(arrayPatternQuestions).then(answers => {
    const pattern = RegExp(answers.pattern);
    exportFile({
      testCases,
      fileName,
      func: RndArray,
      params: { minSize, maxSize, pattern },
    });
  });
};
const ArrayRangePrompt = async (
  testCases: number,
  fileName: string,
  minSize: number,
  maxSize: number
): Promise<void> => {
  inquirer.prompt(arrayRangeQuestion).then(answers => {
    const min = parseInt(answers.min);
    const max = parseInt(answers.max);
    exportFile({
      testCases,
      fileName,
      func: RndArray,
      params: { minSize, maxSize, range: [min, max] },
    });
  });
};
export default ArrayPrompt;
