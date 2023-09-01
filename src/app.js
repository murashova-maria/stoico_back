const express = require("express")
const cors = require("cors")
const api = require("./api")


const app = express()

//CORS
app.use(cors({
    origin: "http://localhost:3000"
}))

//JSON converting
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hellow world")
})
//API
app.use("/v1", api)



module.exports = app