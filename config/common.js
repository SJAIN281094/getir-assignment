module.exports = {
  swaggerConfig: {
    swaggerDefinition: {
      info: {
        title: 'Getir',
        version: '1.0.0',
        description: 'Assignment',
        contact: {
          name: 'Shubham Jain',
        },
        servers: ['http://localhost:3000'],
      },
      schemes: ['http'],
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
    apis: ['./controllers/**/docs/*.js'],
  },
};