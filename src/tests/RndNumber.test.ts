import RndNumber from '../logic/RndNumber';
import { INT_MAX, INT_MIN } from '../constants/constants';
test('Random Number test', () => {
  for (let i = 0; i < 10; i++) {
    expect(RndNumber({})).toBeNumber();
    expect(RndNumber({})).toBeWithin(INT_MIN, INT_MAX + 1);

    expect(RndNumber({ min: 100 })).toBeGreaterThanOrEqual(100);
    expect(RndNumber({ min: -100 })).toBeGreaterThanOrEqual(-100);
    expect(RndNumber({ max: -100 })).toBeLessThanOrEqual(-100);

    // [-100, 100]
    expect(RndNumber({ min: 100, max: -100 })).toBeWithin(-100, 100);

    // floating point numbers
    expect(RndNumber({ min: 2.5000048, max: 19.504544 })).toBeNumber();
    expect(RndNumber({ min: 2.5000048, max: 19.504544 })).toBeWithin(3, 20);

    // big int check
    expect(RndNumber({ max: 1000000000000000 })).toBeFinite();
  }
});
