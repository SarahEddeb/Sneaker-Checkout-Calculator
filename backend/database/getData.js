var mongoose = require('mongoose');
var shoeModel = require('./database.js');

const express = require("express");
const router = express.Router();

router.post("/getAllData", function (req, res) {
    
  shoeModel.find((err, shoes) => {
        if (!err) {
            res.json(shoes) }
        else { 
            console.log('Error while accessing records : ' + err);}
    });

});

module.exports = router;