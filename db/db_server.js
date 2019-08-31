var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var { password } = require('../db/password.js')

mongoose.connect(`mongodb+srv://WhitneyLee:${password}@cluster0-3kkci.mongodb.net/Shazamazon?retryWrites=true&w=majority`, {useNewUrlParser: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected successfully to server');
});


const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProductId: Number,
  ItemName: String,
  Price: Number,
  Rating: Number,
  Category: String,
  Photo: Array,
  sellingPoints: Array,
  numOfQuestions: Number,
  numOfRatings: Number,
  ratingImage: String
}, {collection: 'item-description-module' });

const itemDetail = mongoose.model('itemDetail', schema);

const dropCollection = function(callback) {
  db.dropCollection('item-description-module', function (err, result) {
    if (err) {
      console.log('error delete collection', err);
      callback();
    } else {
      console.log('delete collection success');
      callback();
    }
  });
};
module.exports = { itemDetail, dropCollection };