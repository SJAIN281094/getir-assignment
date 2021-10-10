const {logger} = require('../utils');
class ErrorHandler extends Error {
  constructor(message, status, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorHandler);
    }
    
    this.name = 'Error';
    this.message = message;
    this.status = status;

    switch (status) {
      case 200:
        this.name = 'Success';
        break;
      case 400:
        this.name = 'BadRequest';
        break;
      case 401:
        this.name = 'UnauthorizedError';
        break;
      case 403:
        this.name = 'Forbidden';
        break;
      case 404:
        this.name = 'NotFound';
        break;
      case 500:
        this.name = 'something went wrong';
        break;
      default:
        this.name = 'CustomError';
        break;
    }
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    };
  }
}

module.exports = ErrorHandler;
