// actionTypes
export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';


// action creator
export const countUp = (number) => ({
  type: COUNT_UP,
  number: number + 1,
});

export const countDown = (number) => ({
  type: COUNT_DOWN,
  number: number - 1,
});
