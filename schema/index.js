const recordSchema = require('./record');

module.exports = {
  'POST-/api/v1/records': recordSchema.record,
};