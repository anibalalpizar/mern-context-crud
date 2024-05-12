import axios from 'axios';

export const getPostsRequest = async _ => await axios.get(`http://localhost:4000/posts`)

export const createPostRequest = async post => {
    const formData = new FormData();
    for (let key in post) formData.append(key, post[key])
    return await axios.post(`http://localhost:4000/posts`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const deletePostRequest = async id => await axios.delete(`http://localhost:4000/posts/${id}`)

export const getPostRequest = async id => await axios.get(`http://localhost:4000/posts/${id}`)

export const updatePostRequest = async (id, post) => await axios.put(`http://localhost:4000/posts/${id}`, post)