const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });
const jsonSchema = require('./schema.json');

let validate = ajv.compile(jsonSchema);

module.exports = validate;
