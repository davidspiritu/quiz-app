function clone<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

function shuffleArray<T>(list: T[]): T[] {
  const init = clone(list);
  for (let i = init.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [init[i], init[j]] = [init[j], init[i]];
  }
  return init;
}

export const Utils = {
  clone,
  shuffleArray,
};
