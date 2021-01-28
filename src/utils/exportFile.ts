import ora from 'ora';

import { createWriteStream } from 'fs';
import { stringify } from './stringify';
import { RndRange } from '../logic/RndNumber';
import { RndStringType } from '../logic/RndString';
import { RndArrayType } from '../logic/RndArray';
import { PermutationType } from '../logic/RndPermutation';
import { RndGridType } from '../logic/RndGrid';

type FileFunc = RndRange | RndArrayType | RndStringType | PermutationType | RndGridType;
interface FileParams {
  testCases: number;
  fileName: string;
  func: FileFunc;
  params: any;
}

const exportFile = (fileParams: FileParams): void => {
  const { testCases, fileName, func, params } = fileParams;

  // creating writable file stream to write each test in small chunk
  const stream = createWriteStream(`${fileName}.txt`, { flags: 'a' });

  // starting loader
  const spinner = ora('Writing test cases').start();

  if (testCases === 0) {
    const chunk = stringify(func(params));
    stream.write(chunk);
  } else {
    const tcs = testCases + '\n';
    stream.write(tcs);
    for (let i = 0; i < testCases; i++) {
      const chunk = stringify(func(params));
      stream.write(chunk);
    }
  }
  stream.end(() => {
    stream.close();
    setTimeout(() => {
      spinner.color = 'yellow';
      spinner.text = 'Almost done';
    }, 1000);
    spinner.succeed('Input file successfully created!!');
    process.exit();
  });
};

export default exportFile;
