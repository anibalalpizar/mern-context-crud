import Post from '../models/Post.js';

export const getPosts = async (req, res) => res.send(await Post.find())

export const createPost = async (req, res) => {
    const { title, description } = req.body
    const postCreated = new Post({ title, description })
    res.json(await postCreated.save())
}

export const updatePost = async (req, res) => res.json(await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }))

export const deletePost = async (req, res) => {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    if (!postRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
}

export const getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) return res.sendStatus(404)
    return res.json(post)
}