const {
  createPost,
  getAllPosts,
  getPostById,
  updateById,
} = require("../../models/post/post.model");

async function httpCreatePost(req, res) {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const post = await createPost(title, description, content);
    res.json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpGetAllPosts(req, res) {
  try {
    const posts = await getAllPosts();
    if (!posts) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(posts);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpGetPostById(req, res) {
  try {
    const postId = req.params.id;
    const post = await getPostById(postId);
    if (!post) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpUpdatePostById(req, res) {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const post = await updateById(id, title, description, content);
    if (!post) {
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {
  httpGetPostById,
  httpGetAllPosts,
  httpCreatePost,
  httpUpdatePostById,
};
