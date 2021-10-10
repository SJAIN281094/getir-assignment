const express = require('express');
const router = express.Router();
const { requestValidator, contextHandler } = require('../services');

const record = require('./record');

router.use('/records', record({ requestValidator }));

router.use(contextHandler);

module.exports = router;
