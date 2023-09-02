const {
  createPost,
  getAllPosts,
  getPostById,
  updateById,
  deleteById,
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
      return res.status(500).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function httpUpdatePost(req, res) {
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

async function httpDeletePost(req, res) {
  try {
    const postId = req.params.id;
    const post = await deleteById(postId);
    if (!post) {
      return res.status(500).json({ error: "Post not found" });
    }
    res.json({ message: "Successfully deleted" });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Coudn't delete a post with specified id" });
  }
}

module.exports = {
  httpGetPostById,
  httpGetAllPosts,
  httpCreatePost,
  httpUpdatePost,
  httpDeletePost,
};
