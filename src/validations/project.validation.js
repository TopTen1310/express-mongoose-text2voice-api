const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const text2Voice = {
    body: Joi.object().keys({
        data: Joi.array().items(Joi.object().keys({
            volume: Joi.number().required(),
            rate: Joi.number().required(),
            text: Joi.string().required(),
        }))
    }),
};

module.exports = {
    text2Voice,
}
