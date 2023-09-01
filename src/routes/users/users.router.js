const express = require("express");
const { usersAuth, usersSignIn, usersCreate } = require("./users.controller");
const { createUserValidator } = require("../../validators/validators");
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
  usersCreate
);

//Authorization
usersRouter.post("/sign-in", usersSignIn);


//Get user info (check auth)
usersRouter.get("/auth", usersAuth);


module.exports = usersRouter;
