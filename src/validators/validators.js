const { body } = require("express-validator");



const createUserValidator = [
    body("user_name", "Invalid user name").isString().isLength({min: 5}),
    body("password", "Invalid password format").isString().isLength({min: 6}),
]

module.exports = {
    createUserValidator
}