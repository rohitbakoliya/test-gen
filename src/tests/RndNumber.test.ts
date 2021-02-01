import RndNumber from '../logic/RndNumber';
import { INT_MAX, INT_MIN } from '../constants/constants';
test('Random Number test', () => {
  for (let i = 0; i < 10; i++) {
    expect(RndNumber({}).result).toBeNumber();
    expect(RndNumber({}).result).toBeWithin(INT_MIN, INT_MAX + 1);

    expect(RndNumber({ min: 100 }).result).toBeGreaterThanOrEqual(100);
    expect(RndNumber({ min: -100 }).result).toBeGreaterThanOrEqual(-100);
    expect(RndNumber({ max: -100 }).result).toBeLessThanOrEqual(-100);

    // [-100, 100]
    expect(RndNumber({ min: 100, max: -100 }).result).toBeWithin(-100, 100 + 1);

    // floating point numbers
    expect(RndNumber({ min: 2.5000048, max: 19.504544 }).result).toBeNumber();
    expect(RndNumber({ min: 2.5000048, max: 19.504544 }).result).toBeWithin(3, 20);

    // big int check
    expect(RndNumber({ max: 1000000000000000 }).result).toBeFinite();
  }
});
