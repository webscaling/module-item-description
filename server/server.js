const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const timerFn = require('timer-node');
const timer = timerFn('test-timer');
// const { itemDetail } = require('../db/db_server.js');
const query = require('../db/queries.js');

const app = express();
const port = 1337;




/* Middlewares */
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});


/* Routes */
app.post('/itemDescription', (req, res) => {
  const item = new itemDetail({
    _id: new mongoose.Types.ObjectId(),
    ProductId: req.body.ProductId,
    ItemName: req.body.ItemName,
    Price: req.body.Price,
    Rating: req.body.Rating,
    Category: req.body.Category,
    Photo: req.body.Photo,
    sellingPoints: req.body.sellingPoints,
    numOfQuestions: req.body.numOfQuestions,
    numOfRatings: req.body.numOfRatings,
    ratingImage: req.body.ratingImage,
    colorChoices: req.body.colorChoices,
    reviewBreakdown: req.body.reviewBreakdown,
  });
  item.save()
    .then(result => {
      res.status(201).send({
        message: 'handling POST requests to /itemDescription'
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err });
    });
});

app.post('/seedProductsTable', (req, res) => {
  timer.start();
  query.seedProductsTable(req, res, () => {
    timer.stop();
    console.log(timer.seconds());
  });
});

app.post('/seedColorsTable', (req, res) => {
  timer.start();
  query.seedColorsTable(req, res, () => {
    timer.stop();
    console.log(timer.seconds());
  });
});

app.get('/itemDescription', (req, res) => {
  /*
  itemDetail.find(req.query.ProductId === undefined ? null : { ProductId: req.query.ProductId })
    .exec()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      console.err(err);
      res.status(500).send( {error: err} );
    });
  */
  query.getItems(req.query.ProductId, res);
});

app.put('/itemDescription', (req, res) => {
  console.log(req);
  itemDetail.updateOne(
    { "ProductId" : req.body.ProductId },
    { "numOfRatings" : req.body.numOfRatings,
      "reviewBreakdown" : req.body.reviewBreakdown,
      "Rating" : req.body.Rating,
      "ratingImage" : req.body.ratingImage,
    })
  .then(doc => {
    res.status(200).send(doc);
  })
  .catch(err => {
    console.err(err);
    res.status(500).send( {error: err} );
  });
})


/* Server Creation */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));