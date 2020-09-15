import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'VinzApp API',
        version: '1.0.0',
        description: 'VinzApp backend',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['./src/index.ts'],
};

export default swaggerJSDoc(options);