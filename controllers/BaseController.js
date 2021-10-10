const services = require('../services');
const utils = require('../utils');
const RecordController = require('./record');
class BaseController {
  constructor(props){
    this.services = services;
    this.utils = utils;
    this.db = services.db;
    this.ErrorHandler = services.ErrorHandler;
    this.req = {
      headers: props.req.headers || {},
      body: props.req.body || {},
      params: props.req.params || {},
      query: props.req.query || {},
      files: props.req.files || [],
    };
    this.res = props.res;
    this.next = props.next;
    this.controllers = {
      RecordController,
    };
  }
}

module.exports = BaseController;