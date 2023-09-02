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


const getPostById = async (_id) => {
    const post = await PostModel.find({_id})
    return post
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById
}