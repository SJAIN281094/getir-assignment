const express = require('express');
const router = express.Router();
const RecordController = require('../controllers/record');

module.exports = ({ requestValidator }) => {
  router.post('/', requestValidator, (req, res, next) => {
    const recordInstance = new RecordController({req, res, next});
    recordInstance.getRecords();
  });
  return router;
};
