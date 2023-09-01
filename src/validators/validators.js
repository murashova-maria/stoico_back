const { body } = require("express-validator");



const createUserValidator = [
    body("user_name", "Invalid user name").isString().isLength({min: 5}),
    body("password", "Invalid password format").isString().isLength({min: 6}),
]

const signInValidator = [
    body("user_name", "Invalid user credentials").isString().isLength({min: 5}),
    body("password", "Invalid user credentials").isString().isLength({min: 6}),
]

const createPostValidator = [
    body("title", "Invalid post title").isLength({min: 5}).isString(),
    body("description", "Invalid post description").isLength({min: 10}).isString(),
    body("content", "Invalid content").isLength({min: 10}).isString(),
]


module.exports = {
    createUserValidator,
    signInValidator,
    createPostValidator
}