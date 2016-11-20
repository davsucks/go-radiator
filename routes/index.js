'use strict';

var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('index');
});

router.get('/dashboard', function(req, res, next) {
   fs.readFile('actualResponse.json', 'utf8', function(err, data) {
     res.json(data);
   });
});

module.exports = router;
