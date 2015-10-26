var Joi = require('joi');

var schema = {
    a: Joi.string()
};

Joi.validate({ a: 1 }, schema, function (err, value) {

    if (err) {
        console.error(err);
    }
});
