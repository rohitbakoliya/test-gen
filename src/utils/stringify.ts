export const stringify = (
  input: string | number | Array<number | string> | Array<Array<number | string>>
): string => {
  let result = '';
  if (typeof input === 'string' || typeof input === 'number') {
    return (result += input + '\n');
  }
  if (Array.isArray(input[0])) {
    result += input.length + ' ' + input[0].length + '\n';
    input.forEach((x: any) => (result += x.join(' ') + '\n'));
    return result;
  }
  result += input.length + '\n';
  result += input.join(' ') + '\n';
  return result;
};
