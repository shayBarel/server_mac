var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/start', function(req, res, next) {
    var path = "D:\\Users\\shay\\PycharmProjects\\TestingSelenium";
    var options = {
        mode: 'text',
        scriptPath: path
    };



    PythonShell.run('run.py',options, function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            // results is an array consisting of messages collected during execution
            console.log('results: %j', results);
            //res.sendStatus(200);
            res.sendStatus(200);
        }
    })
});

/* GET home page. */
router.get('/sendproductfile', function(req, res, next) {
    res.download('D:\\Users\\shay\\Downloads\\productDetails.csv','productDetails.csv');

});

router.get('/sendlotfile', function(req, res, next) {
    res.download('D:\\Users\\shay\\Downloads\\lotDetails.csv','lotDetails.csv');
});

module.exports = router;
