var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');

router.get('/', controller.get);
router.post('/', controller.insert);
router.delete('/', controller.wipe);

module.exports = router;
