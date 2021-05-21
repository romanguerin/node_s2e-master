var express = require('express');
var router = express.Router();
const sourceValue = require('../public/javascripts/sketch.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


setInterval(function(){
    const fs = require('fs')
    fs.readFile('public/json/myfile.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
    })

    const jsonString = JSON.stringify(sourceValue)
    fs.writeFile('public/json/myfile.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    }, 3000);

