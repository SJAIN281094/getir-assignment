const models = require('../models');
const ErrorHandler = require('./errorHandler');

module.exports = (() => {
  return Object.freeze({
    aggregate
  });

  async function aggregate(params) {
    try {
      await validateParams(params);
      const { model, query } = params;
      return await models[model.toLowerCase()].aggregate(query);
    } catch (err) {
      console.log('err', err);
      throw new ErrorHandler(err, 500);
    }
  }
})();

async function validateParams(params) {
  if (params.model && typeof params.model !== 'string') {
    throw new ErrorHandler('Model name must be in string', 500);
  }

  if (params.query && typeof params.query !== 'object') {
    throw new ErrorHandler('Query must be in object', 500);
  }

  if (params.select && typeof params.select !== 'object') {
    throw new ErrorHandler('fields filter must be in object', 500);
  }

  if (params.populate && !Array.isArray(params.populate)) {
    params.populate.forEach((obj) => {
      if (typeof obj !== 'object') {
        throw new ErrorHandler('Array value must be in object', 500);
      } else {
        if (!obj.path) {
          throw new ErrorHandler('Value of array must be have path property', 500);
        }
      }
    });
    throw new ErrorHandler('Populate must be in array', 500);
  }

  if (params.options && typeof params.options !== 'object') {
    throw new ErrorHandler('fields filter must be in object', 500);
  }
}
