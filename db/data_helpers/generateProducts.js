const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const timerFn = require('timer-node');
const timer = timerFn('test-timer');

timer.start();

const numberOfProducts = 1000000;
const products = [];

for (let i = 0; i < numberOfProducts; i++) {
  products.push(
    {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      numReviews: Number(faker.random.number(100)),
      numQuestions: Number(faker.random.number(100))
    }
  );
}

const csvWriter = createCsvWriter({
  path: '../randomData.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'price', title: 'Price'},
    {id: 'numReviews', title: 'NumReviews'},
    {id: 'numQuestions', title: 'NumQuestions'}
  ]
});

csvWriter
  .writeRecords(products)
  .then(() => console.log('The CSV file was written successfully'));

timer.stop();

console.log(timer.milliseconds());