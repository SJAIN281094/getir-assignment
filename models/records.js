const Mongoose = require('mongoose');
const { model, Schema } = Mongoose;

const recordsSchema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  key: { type: String, required: true },
  counts: { type: Array, required: true },
  value: { type: String, required: true },
});

module.exports = model('records', recordsSchema, 'records');