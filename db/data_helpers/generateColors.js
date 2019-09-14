const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const timerFn = require('timer-node');
const timer = timerFn('test-timer');

timer.start();

const numberOfColors = 10000000;
const colors = [];

for (let i = 0; i < numberOfColors; i++) {
  colors.push(
    {
      color: faker.commerce.color(),
      product: Number(faker.random.number(10000000))
    }
  );
}

const csvWriter = createCsvWriter({
  path: '../randomColorData.csv',
  header: [
    {id: 'color', title: 'Color'},
    {id: 'product', title: 'Product'}
  ]
});

csvWriter
  .writeRecords(colors)
  .then(() => {
    timer.stop();
    console.log(timer.milliseconds());
    console.log('The CSV file was written successfully');
  })
  .catch(error => console.log('Error writing CSV file'));