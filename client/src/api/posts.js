import axios from 'axios';

export const getPostsRequest = async _ => await axios.get(`http://localhost:4000/posts`)

export const createPostRequest = async post => await axios.post(`http://localhost:4000/posts`, post)

export const deletePostRequest = async id => await axios.delete(`http://localhost:4000/posts/${id}`)

export const getPostRequest = async id => await axios.get(`http://localhost:4000/posts/${id}`)

export const updatePostRequest = async (id, post) => await axios.put(`http://localhost:4000/posts/${id}`, post)