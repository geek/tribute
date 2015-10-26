var Joi = require('joi');

var schema = {
    a: Joi.string().email()
};

Joi.validate({ a: 'fu@bar.com' }, schema, function (err, value) {

    if (!err) {
        console.log(JSON.stringify(value) + ' validated');
    }
});

Joi.validate({ a: 'fu' }, schema, function (err, value) {

    if (err) {
        console.error(err);
    }
});
