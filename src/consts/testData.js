import faker from 'faker';

export const twitterDataSample = new Array(10)
  .fill(null)
  .map((_, index) => ({
    image: faker.random.image(),
    id: index,
    text: faker.lorem.text(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    timeStamp: 1602067058848
  }));
