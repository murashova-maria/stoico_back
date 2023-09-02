const express = require("express")
const cors = require("cors")
const api = require("./api")


const app = express()

//CORS
app.use(cors())

//JSON converting
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hellow world")
})
//API
app.use("/v1", api)



module.exports = app