import RndString from '../logic/RndString';

describe('Random String tests', () => {
  test('with pattern', () => {
    const patterns: Array<string> = ['abc xyz|', 'rohitb', '12based?1~', '/'];

    patterns.forEach(pattern => {
      const result = RndString({ pattern });
      expect(result).toBeString();
      expect(result).toHaveLength(pattern.length);
      expect(result).toMatch(new RegExp(`[${pattern}]`, 'g'));
    });

    expect(RndString({ pattern: 'AKGYZ', size: 10 })).toMatch(/[AKGYZ]/g);
    expect(RndString({ pattern: 'AKGYZ', size: 10 })).toHaveLength(5);
    expect(RndString({ pattern: 'AKGYZ', size: 10, fixedSize: false })).toMatch(/^.{1,5}$/);
  });

  test('without pattern', () => {
    expect(RndString({ size: 10 })).toBeString();
    expect(RndString({ size: 10 })).toHaveLength(10);
    expect(RndString({ size: 10 })).toMatch(/^[a-z]((?![A-Z0-9]).)*$/g);
    expect(RndString({ size: 10, fixedSize: false })).toMatch(/^[a-z]((?![A-Z0-9]).)*$/g);
    expect(RndString({ size: 10, fixedSize: false })).toMatch(/^.{1,10}$/);

    expect(RndString({ size: 5000, fixedSize: false, digits: true })).toMatch(
      /^[a-z0-9]((?![A-Z]).)*$/g
    );
    expect(RndString({ size: 5000, fixedSize: false, digits: true })).toMatch(/^.{1,5000}$/g);

    expect(
      RndString({ size: 500, fixedSize: false, digits: true, lowercase: false, uppercase: true })
    ).toMatch(/^[A-Z0-9]((?![a-z]).)*$/g);
    expect(
      RndString({
        size: 200,
        fixedSize: false,
        digits: true,
        lowercase: false,
        uppercase: true,
        spacialchars: true,
      })
    ).toMatch(/^[A-Z0-9~@!#$%&*]((?![a-z]).)*$/g);
  });
});
