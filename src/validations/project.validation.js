const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const text2Voice = {
    body: Joi.object().keys({
        data: Joi.array().items(Joi.object().keys({
            type: Joi.string().required(),
            value: Joi.number().required(),
        }))
    }),
};

module.exports = {
    text2Voice,
}
