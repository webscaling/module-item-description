var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database is connected!")
});

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

blogSchema.set('autoIndex', false);



module.exports = db;