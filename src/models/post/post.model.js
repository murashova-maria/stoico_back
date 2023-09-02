const PostModel = require("./post.mongo")



const createPost = async (title, description, content) => {
    const doc = new PostModel({
        title,
        description,
        content
    })

    const post = await doc.save()
    return post
}


const getAllPosts = async () => {
    const posts = await PostModel.find({})
    return posts
}

module.exports = {
    createPost,
    getAllPosts
}