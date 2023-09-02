const express = require("express");
const { createPostValidator } = require("../../validators/validators");
const {
  handleValidationErrors,
} = require("../../utils/handleValidationErrors");
const { checkAuth } = require("../../utils/checkAuth");
const { httpCreatePost, httpGetAllPosts, httpGetPostById } = require("./posts.controller");

const postsRouter = express.Router();

//Get all posts
postsRouter.get("", httpGetAllPosts);

//Get post by id
postsRouter.get("/:id", httpGetPostById);



//Create post
postsRouter.post(
    "",
    checkAuth,
    createPostValidator,
    handleValidationErrors,
    httpCreatePost
  );

module.exports = postsRouter;
