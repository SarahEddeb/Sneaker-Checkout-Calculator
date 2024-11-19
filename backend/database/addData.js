var mongoose = require('mongoose');
var shoeModel = require('./database.js');

const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/addData", jsonParser, function (req, res) {
    obj = req.body;
    var shoeData = shoeModel({
        "id": obj.id, 
        "name": obj.name, 
        "photo": obj.photo, 
        "price":obj.price, 
        "added":obj.added});
    
    shoeData.save();
    res.json({"message":"Successfully filled!"})
});

module.exports = router;