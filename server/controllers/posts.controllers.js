import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
    try {
        res.send(await Post.find())
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body
        const postCreated = new Post({ title, description })
        res.json(await postCreated.save())
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    try {
        res.json(await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePost = async (req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        if (!postRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.sendStatus(404)
        return res.json(post)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}