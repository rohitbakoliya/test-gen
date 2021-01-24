import RndString from '../logic/RndString';

describe('Random String tests', () => {
  test('with pattern', () => {
    const patterns: Array<string> = ['abc xyz|', '12based?1~', '/', ''];

    patterns.forEach(pattern => {
      const result = RndString({ pattern });
      expect(result).toBeString();
      expect(result.length).toBeWithin(0, Math.max(0, result.length + 1));
      expect(result).toMatch(new RegExp(`${pattern}`));
    });

    expect(
      RndString({ pattern: /[a-z0-9._+-]{1,20}@[a-z0-9]{3,15}\.[a-z]{2,4}/, mxLength: 10 })
    ).toMatch(/[a-z0-9._+-]{1,20}@[a-z0-9]{3,15}\.[a-z]{2,4}/);

    expect(
      RndString({
        pattern: /(January|February|March|April|May|June|July|August|September|October|November|December) ([1-9]|[12][0-9]|3[01]), (19|20)[0-9][0-9]/,
        mxLength: 10,
      })
    ).toMatch(
      /(January|February|March|April|May|June|July|August|September|October|November|December) ([1-9]|[12][0-9]|3[01]), (19|20)[0-9][0-9]/
    );

    expect(RndString({ pattern: 'AKGYZ', mxLength: 10, mnLength: 5 })).toMatch(/^.{5,10}$/);
  });

  test('without pattern', () => {
    expect(RndString({ mxLength: 10 })).toBeString();
    expect(RndString({ mxLength: 10, mnLength: 10 })).toHaveLength(10);
    expect(RndString({ mxLength: 10 })).toMatch(/^[a-z]((?![A-Z0-9]).)*$/g);
    expect(RndString({ mxLength: 10, mnLength: 4 })).toMatch(/^[a-z]((?![A-Z0-9]).)*$/g);
    expect(RndString({ mxLength: 10, mnLength: 4 })).toMatch(/^.{4,10}$/);

    expect(RndString({ mxLength: 5000, mnLength: 600, digits: true })).toMatch(
      /^[a-z0-9]((?![A-Z]).)*$/g
    );

    expect(RndString({ mxLength: 5000, mnLength: 600, digits: true })).toMatch(/^.{1,5000}$/g);

    expect(
      RndString({ mxLength: 500, mnLength: 100, digits: true, lowercase: false, uppercase: true })
    ).toMatch(/^[A-Z0-9]((?![a-z]).)*$/g);

    expect(
      RndString({
        mxLength: 200,
        mnLength: 200,
        digits: true,
        lowercase: false,
        uppercase: true,
        spacialchars: true,
      })
    ).toMatch(/^[A-Z0-9~@!#$%&*]((?![a-z]).)*$/g);
  });
});
