interface RandomParams {
  min: number;
  max: number;
}

type RandomType = (randomParams: RandomParams) => number;

const Random: RandomType = (randomParams: RandomParams) => {
  const min = Math.ceil(randomParams.min);
  const max = Math.floor(randomParams.max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default Random;
