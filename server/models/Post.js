import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        url: String,
        public_id: String, // Cloudinary public_id
    }
})

export default mongoose.model("Post", postsSchema)