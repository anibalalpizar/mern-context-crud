import fs from 'fs-extra';
import { deleteImage, uploadImage } from '../libs/cloudinary.js';
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
        let image = null
        if (req.files.image) {
            const res = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: res.secure_url,
                public_id: res.public_id
            }
        }

        const postCreated = new Post({ title, description, image })
        res.json(await postCreated.save())
    } catch (error) {
        console.log(error)
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
        if (postRemoved.image.public_id) await deleteImage(postRemoved.image.public_id)
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