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

// app.post('/itemDescription', (req, res) => {
//   console.log(req.body);
//   const itemD = new itemDetail({
//     _id: new mongoose.Types.ObjectId(),
//     productId: req.body.productId,
//     title: req.body.title,
//     rating: req.body.rating,
//     numOfRatings: req.body.numOfRatings,
//     numOfQuestions: req.body.numOfQuestions,
//     price: req.body.price,
//     otherColors: req.body.otherColors,
//     sellingPoints: req.body.sellingPoints
//   });
//   itemD.save()
//     .then(result => {
//       res.status(201).send({
//         message: 'handling POST requests to /item',
//         createProduct: result
//       });
//     })
//     .catch(err => {
//       console.err(err);
//       res.status(500).send( {error: err} );
//     });
// });

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
    ratingImage: req.body.ratingImage
  });
  item.save()
    .then(result => {
      res.status(201).send({
        message: 'handling POST requests to /itemDescription'
        // createdProduct: result
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err });
    });
 });

app.get('/itemDescription', (req, res) => {
  itemDetail.find(req.query.category === undefined ? null : { category: req.query.category })
    .exec()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      console.err(err);
      res.status(500).send( {error: err} );
    });
});


/* Server Creation */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));