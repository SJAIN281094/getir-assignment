const Joi = require('joi');

module.exports = {
  record: {
    validationType: 'body',
    schema: Joi.object({
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      minCount: Joi.number().required(),
      maxCount: Joi.number().required(),
    })
  },
};
