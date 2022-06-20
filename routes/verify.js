const router = require('express').Router();
const verifyController = require('../src/core/helper/VerifyController');

router.get('/getcode', verifyController.getCode);
router.get('/verifycode', verifyController.verifyCode);

module.exports = router;