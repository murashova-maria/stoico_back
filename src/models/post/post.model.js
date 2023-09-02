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


const updateById = async (_id, title, description, content) => {
    const post = await PostModel.findOneAndUpdate({
        _id
    }, {
        title,
        description,
        content
    }, {
        new: true
    })
    return post
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updateById
}