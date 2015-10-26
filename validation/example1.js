var Joi = require('joi');

var schema = {
    a: Joi.string()
};

Joi.validate({ a: 'a string' }, schema, function (err, value) {

    if (!err) {
        console.log(JSON.stringify(value) + ' validated');
    }
});
