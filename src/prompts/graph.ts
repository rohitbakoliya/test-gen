import inquirer from 'inquirer';
import RndDirectedUnweighted from '../logic/graphs/RndDirectedUnweighted';
import RndDirectedWeighted from '../logic/graphs/RndDirectedWeighted';
import RndUndirectedUnWeighted from '../logic/graphs/RndUndirectedUnweighted';
import exportFile from '../utils/exportFile';
import {
  graphQuestion,
  duGraphQuestion,
  dwGraphQuestion,
  uuGraphQuestion,
} from '../utils/questions';

const GraphPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(graphQuestion).then((answers: { graphType: string }) => {
    const { graphType } = answers;
    switch (graphType) {
      case 'Directed Weighted Graph':
        DwGraphPrompt(testCases, fileName);
        break;
      case 'Directed Unweighted Graph':
        DuGraphPrompt(testCases, fileName);
        break;
      case 'Undirected Unweighted Graph':
        UuGraphPrompt(testCases, fileName);
        break;
      case 'default':
        throw new Error('oops!! fall through case');
    }
  });
};

const DwGraphPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer
    .prompt(dwGraphQuestion)
    .then((answers: { nodesRange: string; edgesRange: string; wtRange: string }) => {
      // @ts-ignore
      const nodesRange: [number, number] = answers.nodesRange
        .split(',')
        .slice(0, 2)
        .map(x => parseInt(x));

      // @ts-ignore
      const edgesRange: [number, number] = answers.edgesRange
        .split(',')
        .slice(0, 2)
        .map(x => parseInt(x));

      // @ts-ignore
      const wtRange: [number, number] = answers.wtRange
        .split(',')
        .slice(0, 2)
        .map(x => parseInt(x));

      exportFile({
        fileName,
        testCases,
        func: RndDirectedWeighted,
        params: { nodesRange, edgesRange, wtRange },
      });
    });
};
const DuGraphPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(duGraphQuestion).then((answers: { nodesRange: string; edgesRange: string }) => {
    // @ts-ignore
    const nodesRange: [number, number] = answers.nodesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    // @ts-ignore
    const edgesRange: [number, number] = answers.edgesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    exportFile({
      fileName,
      testCases,
      func: RndDirectedUnweighted,
      params: { nodesRange, edgesRange },
    });
  });
};
const UuGraphPrompt = async (testCases: number, fileName: string): Promise<void> => {
  inquirer.prompt(uuGraphQuestion).then((answers: { nodesRange: string; edgesRange: string }) => {
    // @ts-ignore
    const nodesRange: [number, number] = answers.nodesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    // @ts-ignore
    const edgesRange: [number, number] = answers.edgesRange
      .split(',')
      .slice(0, 2)
      .map(x => parseInt(x));

    exportFile({
      fileName,
      testCases,
      func: RndUndirectedUnWeighted,
      params: { nodesRange, edgesRange },
    });
  });
};
export default GraphPrompt;
