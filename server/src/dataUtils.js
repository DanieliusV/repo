const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
    type: 'object',
    properties: {
        'Company Name': { type: ['string', 'null'] },
        'Isin Code': { type: ['string', 'null'] },
        'Recommendation': { type: ['string', 'null'] },
        'Last Price': { type: ['number', 'null'] },
        'Target Price': { type: ['number', 'null'] },
        'Upside': { type: ['number', 'null'] },
        'Country': { type: ['string', 'null'] },
        'Industry': { type: ['string', 'null'] },
        'Free Float%': { type: ['number', 'null'] },
    },
    required: [],
    additionalProperties: false,
}

const validateData = ajv.compile(schema);

module.exports = {
    validateData: validateData,
};