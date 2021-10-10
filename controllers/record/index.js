const BaseController = require('../BaseController');
const { getRecords } = require('./api');

class RecordController extends BaseController {
  constructor(props) {
    super(props);
    this.RecordController = RecordController;
  }

  async getRecords() {
    return getRecords.call(this);
  }

}

module.exports = RecordController;
