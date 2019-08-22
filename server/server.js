const express = require('express');
const app = express();
const port = 1337;
const { itemDetail } = require('../db/db_server.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* Middlewares */
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* Routes */

app.post('/item', (req, res) => {
  console.log(req.body);
  const itemD = new itemDetail({
    _id: new mongoose.Types.ObjectId(),
    productId: req.body.productId,
    title: req.body.title,
    rating: req.body.rating,
    numOfRatings: req.body.numOfRatings,
    numOfQuestions: req.body.numOfQuestions,
    price: req.body.price,
    otherColors: req.body.otherColors,
    sellingPoints: req.body.sellingPoints
  });
  itemD.save()
    .then(result => {
      res.status(201).send({
        message: 'handling POST requests to /item',
        createProduct: result
      });
    })
    .catch(err => {
      console.err(err);
      res.status(500).send( {error: err} );
    });
});

app.get('/item', (req, res) => {
  itemDetail.find(req.query.category === undefined ? null : { category: req.query.category })
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).send(doc);
    })
    .catch(err => {
      console.err(err);
      res.status(500).send( {error: err} );
    });
});


/* Server Creation */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));