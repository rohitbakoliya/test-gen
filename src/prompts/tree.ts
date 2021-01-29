import inquirer from 'inquirer';
import RndUnweightedTree from '../logic/trees/RndUnweightedTree';
import RndWeightedTree from '../logic/trees/RndWeightedTree';
import exportFile from '../utils/exportFile';
import { treeQuestion, utreeQuestion, wtreeQuestion } from '../utils/questions';

const TreePrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(treeQuestion).then(async (answers: { treeType: string }) => {
    if (answers.treeType === 'Weighted Tree') {
      WTreePrompt(testCases, fileName);
    } else {
      UTreePrompt(testCases, fileName);
    }
  });
};
const WTreePrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(wtreeQuestion).then(async (answers: { nodesRange: string; wtRange: string }) => {
    // @ts-ignore
    const nodesRange: [number, number] = answers.nodesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    // @ts-ignore
    const wtRange: [number, number] = answers.wtRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    exportFile({ fileName, testCases, func: RndWeightedTree, params: { nodesRange, wtRange } });
  });
};

const UTreePrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(utreeQuestion).then(async (answers: { nodesRange: string }) => {
    // @ts-ignore
    const nodesRange: [number, number] = answers.nodesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));
    exportFile({ fileName, testCases, func: RndUnweightedTree, params: { nodesRange } });
  });
};

export default TreePrompt;
