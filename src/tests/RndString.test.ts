import RndString from '../logic/RndString';

describe('Random String tests', () => {
  const patterns: Array<string> = ['abc xyz|', '12based?1~', '/', ''];
  test('string => should return string with correct length', () => {
    patterns.forEach(pattern => {
      const result = RndString(pattern);
      expect(result).toBeString();
      expect(result.length).toBeWithin(0, Math.max(0, result.length + 1));
    });
  });

  test('string => should match with input pattern', () => {
    patterns.forEach(pattern => {
      const result = RndString(pattern);
      expect(result).toMatch(new RegExp(`${pattern}`));
    });
  });

  test('should return correct expression', () => {
    const expressions: Array<RegExp> = [
      /[a-z0-9._+-]{1,20}@[a-z0-9]{3,15}\.[a-z]{2,4}/,
      /(January|February|March|April|May|June|July|August|September|October|November|December) ([1-9]|[12][0-9]|3[01]), (19|20)[0-9][0-9]/,
    ];
    expressions.forEach(expression => {
      expect(RndString(expression)).toMatch(expression);
    });
  });

  test('should return expression of correct length', () => {
    expect(RndString(/[A-Z]{5,10}/)).toMatch(/^.{5,10}$/);
  });

  // test('with incorrect pattern', () => {
  //   const result = RndString('/$%dfa\\/');
  //   expect(result).toBeString();
  //   expect(result.length).toBeWithin(0, Math.max(0, result.length + 1));
  //   expect(result).toMatch(new RegExp(result));
  // });
});
