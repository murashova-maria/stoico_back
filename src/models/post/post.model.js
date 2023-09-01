const postModel = require("./post.mongo")



const createPost = async (title, description, content) => {
    const doc = new postModel({
        title,
        description,
        content
    })

    const post = await doc.save()
    return post
}

module.exports = {
    createPost
}