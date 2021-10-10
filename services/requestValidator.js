const validationSchemas = require('../schema');
const ErrorHandler = require('./errorHandler');

module.exports = (req, res, next) => {
  try {
    const schemaToValidateAgainst = validationSchemas[`${req.method}-${req.originalUrl}`]?.schema;
    const validationType = validationSchemas[req.originalUrl]?.validationType || 'body';
    if (!schemaToValidateAgainst) {
      throw new ErrorHandler('SchemaToValidateAgainst is required', 400);
    }
    const { error } = schemaToValidateAgainst.validate(req[validationType]);
    if (error) {
      const message = error.details.map((error) => {
        return {
          field: error.path[0],
          message: error.message,
        };
      }) || [{ field: 'any', message: 'Validation failed' }];
      throw new ErrorHandler(message, 400);
    }
    next();
  } catch (err) { 
    res.status(err.status).send(
      Object.freeze({
        success: false,
        code: err.status,
        error: {
          message: err.message,
        },
      }),
    );
    req.connection.destroy();
  }
};
