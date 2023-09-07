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
    const posts = await PostModel.find({}).select(['-content'])
    return posts
}


const getPostById = async (_id) => {
    const post = await PostModel.findOne({_id})
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




const deleteById = async (_id) => {
    const post = await PostModel.findOneAndDelete({_id})
    return post
}



module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updateById,
    deleteById
}