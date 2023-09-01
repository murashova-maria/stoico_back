const express = require("express")
const usersRouter = require("./routes/users/users.router")
const postsRouter = require("./routes/posts/posts.router")


const api = express.Router()


api.use("/users", usersRouter)
api.use("/posts", postsRouter)


module.exports = api