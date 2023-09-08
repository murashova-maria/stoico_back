const express = require("express")
const multer = require("multer");
const cors = require("cors")
const api = require("./api");
const { checkAuth } = require("./utils/checkAuth");
const { getUploadFileName } = require("./utils/getUploadFileName");


const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, "uploads")
    },
    filename: (_, file, cb) => {
        const name = getUploadFileName(file?.originalname || "file", "uploads")
        cb(null, name)
    }
})

const upload = multer({ storage })

//Static files
app.use("/uploads", express.static("uploads"))

//CORS 
app.use(cors())

//JSON converting
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hellow world")
})


//Uploads
app.post("/v1/upload", checkAuth, upload.single("image"), (req, res) => {
    const fileName = req.file?.originalname || "file"
    res.json({
        url: `/uploads/${getUploadFileName(fileName, "uploads", true)}`
    })
})


//API
app.use("/v1", api)



module.exports = app