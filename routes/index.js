var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/popup/jusoPopup', (req, res) => {
  res.render('jusoPopup');
});

router.post('/popup/jusoPopup', (req, res) => {
  res.locals = req.body;
  res.render('jusoPopup');
});

module.exports = router;
