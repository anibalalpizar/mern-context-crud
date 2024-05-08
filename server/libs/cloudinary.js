import { v2 as cloudinary } from "cloudinary"
import { CLOUDINARY } from "../config.js"

cloudinary.config({
    cloud_name: CLOUDINARY.CLOUD_NAME,
    api_key: CLOUDINARY.API_KEY,
    api_secret: CLOUDINARY.API_SECRET
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'test'
    })
}

export const deleteImage = async publicId => {
    return await cloudinary.uploader.destroy(publicId)
}