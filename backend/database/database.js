dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('error', console.error.bind(console, 'connection error:'));

var shoeSchema = mongoose.Schema({
    id: String,
    name: String,
    photo: String,
    price: Number,
    added: Boolean
  });
 
module.exports = mongoose.model('shoes', shoeSchema);