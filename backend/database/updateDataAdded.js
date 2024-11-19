var mongoose = require('mongoose');
var shoeModel = require('./database.js');

const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/updateAdded", jsonParser, function (req, res) {
  var id = req.body.id;
  var value = req.body.value;

  shoeModel.findOneAndUpdate({ "id": id}, {"added": value}, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});
});

module.exports = router;
