const express = require("express");
const {createPostValidator} = require("../../validators/validators")
const {handleValidationErrors} = require("../../utils/handleValidationErrors")
const {checkAuth} = require("../../utils/checkAuth")
const {httpCreatePost} = require("./posts.controller")


const postsRouter = express.Router();


//Create post
postsRouter.post("", checkAuth, createPostValidator, handleValidationErrors, httpCreatePost)




module.exports = postsRouter;