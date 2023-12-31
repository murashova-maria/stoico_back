const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String, //HTML
        required: true,
    },
}, {
    timestamps: true
})


module.exports = mongoose.model("Post", postSchema)