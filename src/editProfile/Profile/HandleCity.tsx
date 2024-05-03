const cities = [
  "hello",
  "hell",
  "he",
  "dor",
  "back",
  "kenhwvqb",
  "lkjkqj b",
  "qiohuiqq jkvbksoqjq lkwjvn hell",
];

export const setCityName = (input: string, start: boolean) => {
  //todo (request from back)
  if (start) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].match(`^${input}`)) {
        console.log(cities[i]);
        console.log(input);
      }
    }
  }
};
