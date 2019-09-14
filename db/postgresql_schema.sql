DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS colors;

  CREATE TABLE products (
    id SERIAL,
    name varchar(200),
    price integer,
    numReviews integer,
    numQuestions integer
  );

  CREATE TABLE colors (
    id SERIAL,
    color varchar(50),
    product integer
  );

-- COPY products (name, price, numReviews, numQuestions) FROM '/Users/juliakim/Documents/hr/module-item-description/db/randomData.csv' (FORMAT CSV, HEADER, DELIMITER ',');

-- psql -d shazamazon -a -f postgresql_schema.sql