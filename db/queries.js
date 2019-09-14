const { Pool } = require('pg');
// const schema = require('./postgresql_schema.sql');

const pool = new Pool({
  user: 'juliakim',
  host: 'localhost',
  database: 'shazamazon'
});

const getItems = (req, res) => {
  pool.connect()
    .then(client => {
      client.query(`SELECT * FROM products WHERE id=${req}`)
        .then(data => {
          res.status(200).send(data.rows);
        })
        .catch(error => {
          console.log('Error retrieving item from database');
        });
    })
    .catch(error => {
      console.log('Error connecting to database');
    });
};

const seedProductsTable = (req, res, cb) => {
  pool.connect()
    .then(client => {
      const queryString = `COPY products (name, price, numReviews, numQuestions) FROM '/Users/juliakim/Documents/hr/module-item-description/db/randomData.csv' (FORMAT CSV, HEADER, DELIMITER ',')`;
      client.query(queryString)
        .then(data => {
          console.log(data);
          res.status(201).send('Data successfully loaded');
          cb();
        })
        .catch(error => {
          console.log('Error adding items to database');
        });
    })
    .catch(error => {
      console.log('Error connecting to database');
    });
};

const seedColorsTable = (req, res, cb) => {
  pool.connect()
    .then(client => {
      const queryString = `COPY colors (color, product) FROM '/Users/juliakim/Documents/hr/module-item-description/db/randomColorData.csv' (FORMAT CSV, HEADER, DELIMITER ',')`;
      client.query(queryString)
        .then(data => {
          console.log(data);
          res.status(201).send('Data successfully loaded');
          cb();
        })
        .catch(error => {
          console.log('Error adding items to database');
        });
    })
    .catch(error => {
      console.log('Error connecting to database');
    });
};

module.exports = { getItems, seedProductsTable, seedColorsTable };