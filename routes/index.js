var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Router")
  res.render('index', { title: 'Corporativo 723'});
});
module.exports = router;