const express = require("express");
const { httpUsersAuth, httpUsersSignIn, httpUsersCreate } = require("./users.controller");
const { createUserValidator, signInValidator } = require("../../validators/validators");
const {
  handleValidationErrors,
} = require("../../utils/handleValidationErrors");
const { checkAuth } = require("../../utils/checkAuth");

const usersRouter = express.Router();

//Create User
usersRouter.post(
  "/create",
  createUserValidator,
  handleValidationErrors,
  checkAuth,
  httpUsersCreate
);

//Authorization
usersRouter.post("/sign-in", signInValidator, handleValidationErrors, httpUsersSignIn);


//Get user info (check auth)
usersRouter.get("/auth",checkAuth, httpUsersAuth);


module.exports = usersRouter;
