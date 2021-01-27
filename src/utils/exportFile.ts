import { appendFileSync } from 'fs';
import { stringify } from './stringify';

interface FileParams {
  testCases: number;
  fileName: string;
  func: Function;
  params: any;
}

const exportFile = (fileParams: FileParams): void => {
  const { testCases, fileName, func, params } = fileParams;
  if (testCases === 0) {
    writeChunk(func(), fileName);
  } else {
    const tcs = testCases + '\n';
    writeChunk(tcs, fileName);
    for (let i = 0; i < testCases; i++) {
      writeChunk(stringify(func(params)), fileName);
    }
  }
};

const writeChunk = (chunk: string, fileName: string) => {
  appendFileSync(`${fileName}.txt`, chunk);
};
export default exportFile;
