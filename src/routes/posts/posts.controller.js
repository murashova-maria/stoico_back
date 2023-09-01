
const {createPost} = require("../../models/post/post.model")

async function httpCreatePost(req, res) {
    try {
        const title = req.body.title
        const description = req.body.description
        const content = req.body.content
        const post = await createPost(title, description, content)
        res.json(post)
    } catch(e) {
        console.log(e)
        res.status(500).json({error: "Internal server error"})
    }
}


module.exports = {
    httpCreatePost
}