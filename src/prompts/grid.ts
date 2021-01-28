import inquirer from 'inquirer';
import RndGrid from '../logic/RndGrid';
import exportFile from '../utils/exportFile';
import { arrayPatternQuestions, arrayRangeQuestion, gridQuestion } from '../utils/questions';

const GridPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer
    .prompt(gridQuestion)
    .then((answers: { minDim: string; maxDim: string; arrayGenType: string }) => {
      // @ts-ignore
      const minDim: [number, number] = answers.minDim
        .split(',')
        .slice(0, 2)
        .map(x => parseInt(x));

      // @ts-ignore
      const maxDim: [number, number] = answers.maxDim
        .split(',')
        .slice(0, 2)
        .map(x => parseInt(x));

      if (answers.arrayGenType === 'Using Regular Expression') {
        GridPatternPrompt(testCases, fileName, minDim, maxDim);
      } else {
        GridRangePrompt(testCases, fileName, minDim, maxDim);
      }
    });
};

const GridPatternPrompt = async (
  testCases: number,
  fileName: string,
  minDim: [number, number],
  maxDim: [number, number]
): Promise<void> => {
  inquirer.prompt(arrayPatternQuestions).then(answers => {
    const pattern = RegExp(answers.pattern);
    exportFile({
      testCases,
      fileName,
      func: RndGrid,
      params: { minDim, maxDim, pattern },
    });
  });
};

const GridRangePrompt = async (
  testCases: number,
  fileName: string,
  minDim: [number, number],
  maxDim: [number, number]
): Promise<void> => {
  inquirer.prompt(arrayRangeQuestion).then(answers => {
    const min = parseInt(answers.min);
    const max = parseInt(answers.max);
    exportFile({
      testCases,
      fileName,
      func: RndGrid,
      params: { minDim, maxDim, range: [min, max] },
    });
  });
};

export default GridPrompt;
