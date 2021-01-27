import inquirer from 'inquirer';
import RndArray from '../logic/RndArray';
import exportFile from '../utils/exportFile';
import { arrayQuestion, arrayPatternQuestions, arrayRangeQuestion } from '../utils/questions';

const ArrayPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(arrayQuestion).then(async answers => {
    const rows = parseInt(answers.rows);
    const cols = parseInt(answers.cols);
    if (answers.arrayGenType === 'Using Regular Expression') {
      ArrayPatternPrompt(testCases, fileName, rows, cols);
    } else {
      ArrayRangePrompt(testCases, fileName, rows, cols);
    }
  });
};

const ArrayPatternPrompt = async (
  testCases: number,
  fileName: string,
  rows: number,
  cols: number
): Promise<void> => {
  inquirer.prompt(arrayPatternQuestions).then(answers => {
    const pattern = RegExp(answers.pattern);
    exportFile({
      testCases,
      fileName,
      func: RndArray,
      params: { dim: [rows, cols], pattern },
    });
  });
};
const ArrayRangePrompt = async (
  testCases: number,
  fileName: string,
  rows: number,
  cols: number
): Promise<void> => {
  inquirer.prompt(arrayRangeQuestion).then(answers => {
    const min = parseInt(answers.min);
    const max = parseInt(answers.max);
    exportFile({
      testCases,
      fileName,
      func: RndArray,
      params: { dim: [rows, cols], range: [min, max] },
    });
  });
};
export default ArrayPrompt;
